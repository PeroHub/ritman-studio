
"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { programs } from "@/data/programs";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { FileUp, Search, GraduationCap, DollarSign, Handshake, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const faculties = [
  "All",
  "Faculty of Natural and Applied Sciences",
  "Faculty of Social and Management Sciences",
  "Faculty of Health Sciences",
];

const durations = ["All", "4 Years"];

export default function AdmissionsPage() {
  const [filteredPrograms, setFilteredPrograms] = useState(programs);
  const [facultyFilter, setFacultyFilter] = useState("All");
  const [durationFilter, setDurationFilter] = useState("All");
  const { toast } = useToast();

  const handleFilterChange = () => {
    let filtered = programs;
    if (facultyFilter !== "All") {
      filtered = filtered.filter(p => p.details.faculty === facultyFilter);
    }
    if (durationFilter !== "All") {
      filtered = filtered.filter(p => p.details.duration === durationFilter);
    }
    setFilteredPrograms(filtered);
  };
  
  const handleApplicationSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast({
        title: "Application Submitted!",
        description: "Your application has been received. We will get back to you with the next steps.",
    });
    (event.target as HTMLFormElement).reset();
  };
  
  const handleFinancialAidSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast({
        title: "Inquiry Sent!",
        description: "Thank you for your interest in financial aid. Our team will contact you shortly.",
    });
    (event.target as HTMLFormElement).reset();
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[50vh] flex items-center justify-center text-white">
          <Image
            src="/images/jambritman.jpg"
            alt="Students graduating"
            fill
            className="object-cover"
            data-ai-hint="graduating students"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="container mx-auto px-4 text-center relative">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-headline">
              Admissions & Financial Aid
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Your comprehensive guide to joining Ritman College.
            </p>
          </div>
        </section>

        {/* Course Explorer */}
        <section id="course-explorer" className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
              <GraduationCap className="inline-block w-10 h-10 mr-2 text-primary" />
              Course Explorer
            </h2>
            <Card className="p-6 mb-8 shadow-lg">
              <div className="grid md:grid-cols-3 gap-4 items-end">
                <div>
                  <Label htmlFor="faculty-filter">Filter by Faculty</Label>
                  <Select value={facultyFilter} onValueChange={setFacultyFilter}>
                    <SelectTrigger id="faculty-filter">
                      <SelectValue placeholder="Select Faculty" />
                    </SelectTrigger>
                    <SelectContent>
                      {faculties.map(f => <SelectItem key={f} value={f}>{f}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="duration-filter">Filter by Duration</Label>
                   <Select value={durationFilter} onValueChange={setDurationFilter}>
                    <SelectTrigger id="duration-filter">
                      <SelectValue placeholder="Select Duration" />
                    </SelectTrigger>
                    <SelectContent>
                      {durations.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={handleFilterChange} className="w-full">
                    <Search className="mr-2 h-4 w-4" /> Filter Programs
                </Button>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms.map(program => (
                <Card key={program.slug} className="h-full flex flex-col transition-transform transform hover:-translate-y-2 hover:shadow-xl">
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
                    <Badge variant="secondary" className="mb-2">{program.details.faculty}</Badge>
                    <CardDescription>{program.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                      <Link href={`/academics/${program.slug}`} className="w-full">
                        <Button variant="outline" className="w-full">Learn More</Button>
                      </Link>
                  </CardFooter>
                </Card>
              ))}
               {filteredPrograms.length === 0 && (
                <p className="text-center text-muted-foreground md:col-span-3">No programs match your filter criteria.</p>
              )}
            </div>
          </div>
        </section>
        
        {/* Application System */}
        <section id="application-system" className="py-16 bg-background">
          <div className="container mx-auto px-4">
             <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
                <FileUp className="inline-block w-10 h-10 mr-2 text-primary" />
                Online Application
             </h2>
             <Card className="max-w-4xl mx-auto p-6 md:p-8 shadow-lg">
                <CardHeader>
                    <CardTitle>Submit Your Application</CardTitle>
                    <CardDescription>
                        This is a placeholder for a multi-step application form. In a real application, you would have steps for personal info, academic history, and document uploads.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleApplicationSubmit} className="space-y-6">
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
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" required placeholder="john.doe@example.com" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="program-select">Program of Interest</Label>
                            <Select required>
                                <SelectTrigger id="program-select">
                                    <SelectValue placeholder="Select a program" />
                                </SelectTrigger>
                                <SelectContent>
                                    {programs.map(p => <SelectItem key={p.slug} value={p.slug}>{p.title}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="documents">Upload Documents (Transcript, etc.)</Label>
                            <Input id="documents" type="file" />
                        </div>
                        <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Submit Application</Button>
                    </form>
                </CardContent>
             </Card>
          </div>
        </section>

        {/* Fee Calculator & Financial Aid */}
        <section id="fees-and-aid" className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-start">
            {/* Fee Structure */}
            <div id="fee-calculator">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
                 <DollarSign className="inline-block w-10 h-10 mr-2 text-primary" />
                 Fee Structure
              </h2>
              <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Tuition for 2018/2019 Session</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                        <span>Undergraduate Tuition:</span>
                        <span className="font-bold">N1,000,000 / year</span>
                    </div>
                     <div className="flex justify-between items-center">
                        <span>Postgraduate Tuition:</span>
                        <span className="font-bold">N3,00,500 / year</span>
                    </div>
                     <div className="flex justify-between items-center border-t pt-4 mt-4">
                        <span className="font-bold">Total Est. Fees:</span>
                        <span className="font-bold text-primary">N4,000,000</span>
                    </div>
                     <p className="text-xs text-muted-foreground pt-4">This is a simplified calculator. For detailed payment plans, contact the bursary or use our financial aid portal.</p>
                </CardContent>
              </Card>
            </div>
            {/* Financial Aid */}
            <div id="financial-aid">
               <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
                    <Handshake className="inline-block w-10 h-10 mr-2 text-primary" />
                    Financial Aid
               </h2>
               <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Apply for Scholarships</CardTitle>
                    <CardDescription>Fill out the form below to inquire about scholarships and financial aid opportunities.</CardDescription>
                </CardHeader>
                 <CardContent>
                    <form onSubmit={handleFinancialAidSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="aid-name">Full Name</Label>
                            <Input id="aid-name" required placeholder="Jane Doe" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="aid-email">Email Address</Label>
                            <Input id="aid-email" type="email" required placeholder="jane.doe@example.com" />
                        </div>
                        <div className="space-y-2">
                             <Label htmlFor="aid-message">Briefly describe your financial need</Label>
                             <textarea id="aid-message" rows={4} className="w-full rounded-md border border-input p-2 text-sm" placeholder="Tell us about your situation..."></textarea>
                        </div>
                        <Button type="submit" className="w-full">Inquire Now</Button>
                    </form>
                </CardContent>
               </Card>
            </div>
          </div>
        </section>

        {/* Examination Centers */}
        <section id="exam-centers" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
                <Building className="inline-block w-10 h-10 mr-2 text-primary" />
                Examination Centers
            </h2>
             <Card className="shadow-lg">
                <CardContent className="p-0">
                    <div className="h-[400px] bg-muted flex items-center justify-center">
                         <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.827725833444!2d7.712128315264375!3d5.184391939105494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105d1e4e1a07c09d%3A0x6a2c27b32a2f646c!2sRitman%20University!5e0!3m2!1sen!2sng!4v1684321098765!5m2!1sen!2sng"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </CardContent>
                <CardFooter className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center text-sm"><span className="font-bold">Main Campus:</span> Ikot Ekpene</div>
                    <div className="text-center text-sm"><span className="font-bold">Lagos Center:</span> Ikeja</div>
                    <div className="text-center text-sm"><span className="font-bold">Abuja Center:</span> Garki</div>
                    <div className="text-center text-sm"><span className="font-bold">Port Harcourt:</span> GRA</div>
                </CardFooter>
             </Card>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

    