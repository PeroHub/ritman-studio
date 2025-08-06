
"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
    const { toast } = useToast();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        toast({
            title: "Message Sent!",
            description: "Thank you for contacting us. We will get back to you shortly.",
        });
        (event.target as HTMLFormElement).reset();
    };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[50vh] flex items-center justify-center text-white">
          <Image
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1740&auto=format&fit=crop"
            alt="People working on laptops"
            fill
            className="object-cover"
            data-ai-hint="people working"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="container mx-auto px-4 text-center relative">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-headline">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              We're here to help. Contact us with your questions, and we'll be happy to assist you.
            </p>
          </div>
        </section>

        <section id="contact-form" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-4 font-headline">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Have a question? We'd love to hear from you. Reach out to us through any of the channels below, or use the form to send us a message directly.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Our Address</h3>
                      <p className="text-muted-foreground">104 Ikot Ekpene Road, Ikot Ekpene, Akwa Ibom State, Nigeria</p>
                    </div>
                  </div>
                   <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email Us</h3>
                      <a href="mailto:info@ritmancollege.com" className="text-muted-foreground hover:text-primary">info@ritmancollege.com</a>
                    </div>
                  </div>
                   <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Call Us</h3>
                       <a href="tel:+2348031234567" className="text-muted-foreground hover:text-primary">+234 803 123 4567</a>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="p-6 md:p-8 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="first-name">First Name</Label>
                            <Input id="first-name" required placeholder="John" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="last-name">Last Name</Label>
                            <Input id="last-name" required placeholder="Doe" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required placeholder="john.doe@example.com" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="inquiry-type">Reason for Contact</Label>
                        <Select required>
                            <SelectTrigger id="inquiry-type">
                                <SelectValue placeholder="Select a reason" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="admissions">Admissions Inquiry</SelectItem>
                                <SelectItem value="support">Student Support</SelectItem>
                                <SelectItem value="general">General Question</SelectItem>
                                <SelectItem value="feedback">Feedback</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" required placeholder="Your message..." rows={5} />
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="map" className="h-[400px]">
           <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.827725833444!2d7.712128315264375!3d5.184391939105494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105d1e4e1a07c09d%3A0x6a2c27b32a2f646c!2sRitman%20University!5e0!3m2!1sen!2sng!4v1684321098765!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </section>

      </main>
      <Footer />
    </div>
  );
}
