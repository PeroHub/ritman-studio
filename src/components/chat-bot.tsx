"use client";

import { useState, useRef, useEffect, useActionState } from "react";
import { MessageCircle, Send, X, Bot, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { answerFAQ } from "@/ai/flows/answer-faq";
import { useToast } from "@/hooks/use-toast";

type Message = {
  id: string;
  role: "user" | "assistant";
  text: string;
};

async function handleQuestion(
  _prevState: unknown,
  formData: FormData
): Promise<{ answer: string } | { error: string }> {
  const question = formData.get("question") as string;
  if (!question) {
    return { error: "Please enter a question." };
  }
  try {
    const { answer } = await answerFAQ({ question });
    return { answer };
  } catch (e) {
    console.error(e);
    return { error: "Sorry, I couldn't answer that question. Please try again." };
  }
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const [state, formAction, isPending] = useActionState(handleQuestion, null);

  useEffect(() => {
    if (state) {
      if ("answer" in state) {
        setMessages((prev) => [
          ...prev,
          { id: Date.now().toString(), role: "assistant", text: state.answer },
        ]);
      } else if ("error" in state) {
        toast({
          title: "Error",
          description: state.error,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);
  
  const handleFormSubmit = (formData: FormData) => {
    const question = formData.get("question") as string;
    if (question && !isPending) {
       setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: "user", text: question },
      ]);
      formAction(formData);
    }
  }

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          size="icon"
          className="rounded-full h-16 w-16 shadow-lg bg-primary hover:bg-primary/90"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-8 w-8" /> : <MessageCircle className="h-8 w-8" />}
        </Button>
      </div>
      {isOpen && (
        <Card className="fixed bottom-0 right-0 z-50 w-full h-full flex flex-col sm:w-full sm:max-w-sm sm:h-[60vh] sm:bottom-24 sm:right-4 sm:rounded-lg shadow-2xl">
          <CardHeader className="flex flex-row items-center justify-between border-b">
            <div className="flex items-center gap-3">
              <Bot className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">Ritman College AI</CardTitle>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="flex-grow p-0">
            <ScrollArea className="h-full" ref={scrollAreaRef}>
              <div className="p-4 space-y-4">
                <div className="flex items-start gap-3">
                    <Avatar className="w-8 h-8 border-2 border-primary">
                      <AvatarFallback><Bot className="h-4 w-4"/></AvatarFallback>
                    </Avatar>
                    <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                      <p className="text-sm">Hello! How can I help you today?</p>
                    </div>
                  </div>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex items-start gap-3",
                      message.role === "user" && "justify-end"
                    )}
                  >
                    {message.role === "assistant" && (
                       <Avatar className="w-8 h-8 border-2 border-primary">
                        <AvatarFallback><Bot className="h-4 w-4"/></AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={cn(
                        "p-3 rounded-lg max-w-[80%]",
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      )}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                     {message.role === "user" && (
                      <Avatar className="w-8 h-8 border-2 border-muted-foreground">
                        <AvatarFallback><User className="h-4 w-4"/></AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                 {isPending && (
                    <div className="flex items-start gap-3">
                      <Avatar className="w-8 h-8 border-2 border-primary">
                        <AvatarFallback><Bot className="h-4 w-4"/></AvatarFallback>
                      </Avatar>
                      <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                        <Loader2 className="h-5 w-5 animate-spin" />
                      </div>
                    </div>
                  )}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <form action={handleFormSubmit} className="flex w-full items-center gap-2">
              <Input name="question" placeholder="Ask a question..." className="flex-1 font-code" disabled={isPending} />
              <Button type="submit" size="icon" disabled={isPending}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
