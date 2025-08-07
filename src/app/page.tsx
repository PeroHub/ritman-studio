
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BookOpen, Users, Award, Lightbulb } from "lucide-react";
import { programs } from "@/data/programs";

function AnimatedStat({ finalValue, label }: { finalValue: number; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < finalValue) {
      const timeout = setTimeout(() => {
        setCount(Math.min(count + Math.ceil(finalValue / 100), finalValue));
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [count, finalValue]);

  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-bold text-primary">
        {count.toLocaleString()}{label.includes('%') ? '%' : '+'}
      </p>
      <p className="text-sm md:text-base text-foreground/80 mt-1">{label}</p>
    </div>
  );
}

export default function Home() {
  const news = [
    {
      title: "ICAN President Visits Ritman University; Pays Homage to Ikot Ekpene’s Paramount Ruler",
      date: "March 27, 2025",
      snippet: "As part of his visit to Ikot Ekpene, ICAN’s 60th President, Chief Davidson Chizuoke Stephen Alaribe, FCA, visited Ritman University, accompanied by Uyo District Chairman Edidem Utuk and Ikot Ekpene & District Society Chairman Festus Akpan Etukudoh, FCA. They were warmly received by the university’s leadership, including Founder Senator Emmanuel Ibok Essien, FNSE.",
      image: "/images/ican-ritman.jpeg",
      aiHint: "college campus",
    },
    {
      title: "COMMISSIONER OF POLICE CP BABA MOHAMMAD AZARE ON A FAMILIARIZATION VISIT IN RITMAN GROUP OF COMPANIES",
      date: "October 24, 2023",
      snippet: "The safety of both Workers, Students of Ritman Schools and Ritman University remains top priority to the visitor cum Founder of Ritman conglomerate, Senator Emmanuel Ibok Essien.",
      image: "/images/police-ritman.jpg",
      aiHint: "students sports",
    },
    {
      title: "A Milestone Achieved",
      date: "October 22, 2023",
      snippet: "A Milestone Achieved",
      image: "/images/matric-ritman.jpeg",
      aiHint: "robotics lab",
    },
  ];

  const testimonials = [
    {
      name: "Adebayo Adekunle",
      program: "Computer Science, '22",
      quote: "Ritman College provided me with a solid foundation to launch my career in tech. The lecturers are supportive and the facilities are world-class.",
      avatar: "https://images.unsplash.com/photo-1628157588553-5ee30a6c5aa4?q=80&w=100&h=100&auto=format&fit=crop",
      aiHint: "male student",
    },
    {
      name: "Chiamaka Nwosu",
      program: "Business Administration, '23",
      quote: "The practical approach to learning at Ritman prepared me for the real world. I'm grateful for the opportunities and connections I made.",
      avatar: "https://images.unsplash.com/photo-1521567097361-b3843513a863?q=80&w=100&h=100&auto=format&fit=crop",
      aiHint: "female student",
    },
    {
      name: "Emeka Okafor",
      program: "Mass Communication, '21",
      quote: "My time at Ritman was transformative. I honed my skills, built a strong network, and discovered my passion for storytelling.",
      avatar: "https://images.unsplash.com/photo-1582552594393-275b30214918?q=80&w=100&h=100&auto=format&fit=crop",
      aiHint: "happy student",
    },
  ];

  const whyChooseUs = [
    {
      icon: <BookOpen className="w-10 h-10 text-primary" />,
      title: "Quality Education",
      description: "Accredited programs and experienced faculty dedicated to your success.",
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Vibrant Community",
      description: "A diverse and inclusive campus life with numerous clubs and activities.",
    },
    {
      icon: <Award className="w-10 h-10 text-primary" />,
      title: "Career Opportunities",
      description: "Strong industry connections and a high graduate employment rate.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-primary" />,
      title: "Innovative Learning",
      description: "Access to modern facilities and cutting-edge research opportunities.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[60vh] flex items-center justify-center text-white">
          <Image
            src="/images/ritcollege.png"
            alt="College campus"
            fill
            className="object-cover"
            data-ai-hint="college building"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="container mx-auto px-4 text-center relative">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-headline">
              Shape Your Future at Ritman College
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Discover a world of opportunity with our industry-focused programs and vibrant campus life.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Apply Now
            </Button>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <AnimatedStat finalValue={5000} label="Student Enrollment" />
              <AnimatedStat finalValue={95} label="Graduation Rate %" />
              <AnimatedStat finalValue={40} label="Programs Offered" />
              <AnimatedStat finalValue={20} label="Years of Excellence" />
            </div>
          </div>
        </section>

        <section id="academics" className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Featured Programs</h2>
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent>
                {programs.map((program, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="h-full flex flex-col transition-transform transform hover:-translate-y-2 hover:shadow-xl">
                        <CardHeader>
                           <Image
                            src={program.image}
                            alt={program.title}
                            width={600}
                            height={400}
                            className="rounded-t-lg object-cover aspect-[3/2]"
                            data-ai-hint={program.aiHint}
                          />
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <CardTitle className="font-headline text-xl mb-2">{program.title}</CardTitle>
                          <CardDescription>{program.description}</CardDescription>
                        </CardContent>
                        <CardFooter>
                           <Link href={`/academics/${program.slug}`}>
                            <Button variant="outline">Learn More</Button>
                           </Link>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </section>
        
        <section id="news" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Latest News & Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((item, index) => (
                 <Link href="/news" key={index}>
                    <Card className="flex flex-col overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl h-full">
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-48"
                        data-ai-hint={item.aiHint}
                    />
                    <CardHeader>
                        <CardTitle className="font-headline text-lg">{item.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p>{item.snippet}</p>
                    </CardContent>
                    <CardFooter>
                        <Button variant="link" className="p-0 text-primary">Read More</Button>
                    </CardFooter>
                    </Card>
                </Link>
              ))}
            </div>
             <div className="text-center mt-12">
                <Link href="/news">
                    <Button variant="outline">View All News</Button>
                </Link>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">What Our Students Say</h2>
            <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="p-4 text-center">
                      <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <blockquote className="text-lg italic text-foreground/90 mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      <p className="font-bold font-headline">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.program}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Why Choose Ritman College?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="text-center p-6 border-0 shadow-lg bg-secondary/50">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 font-headline">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
