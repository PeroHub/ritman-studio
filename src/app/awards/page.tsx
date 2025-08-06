
"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Award, FileUp, Trophy } from "lucide-react";

export default function AwardsPage() {
    const { toast } = useToast();

    const scholarships = [
        {
            title: "Academic Excellence Scholarship",
            deadline: "2024-12-15",
            description: "Awarded to students with a GPA of 4.0 or higher. Covers 50% of tuition fees.",
            eligibility: "All faculties, Year 2 and above.",
        },
        {
            title: "Leadership in Technology Grant",
            deadline: "2025-01-30",
            description: "For students in the Faculty of Natural and Applied Sciences demonstrating leadership and innovation.",
            eligibility: "Computer Science, Industrial Chemistry students.",
        },
        {
            title: "Community Impact Award",
            deadline: "2025-02-28",
            description: "Recognizing students who have made a significant positive impact in their community.",
            eligibility: "All students with documented volunteer work.",
        },
    ];

    const learnAfricaAwards = [
        { year: "2021", event: "Best E-Learning Initiative", description: "Recognized for our seamless transition to online learning and digital resource availability." },
        { year: "2022", event: "Innovation in Education Award", description: "Awarded for our integration of AI and technology in the curriculum." },
        { year: "2023", event: "Student Support Excellence", description: "Celebrated for our outstanding student support services and mentorship programs." },
    ];

    const studentSuccessStories = [
        {
            name: "Fatima Al-Hassan",
            program: "Medical Laboratory Science, '21",
            story: "After graduating from Ritman, Fatima secured a research position at a leading international health institute, where she contributes to groundbreaking medical research.",
            avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=100&h=100&auto=format&fit=crop",
            aiHint: "female scientist"
        },
        {
            name: "John Okoro",
            program: "Economics, '22",
            story: "John launched a successful fintech startup that provides financial literacy tools to young Nigerians, a venture he started as his final year project at Ritman.",
            avatar: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=100&h=100&auto=format&fit=crop",
            aiHint: "male entrepreneur"
        },
        {
            name: "Aisha Bello",
            program: "Nursing Science, '20",
            story: "Aisha is now a lead nurse in a major hospital's pediatric unit, known for her compassionate care and leadership, skills she honed at Ritman.",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop",
            aiHint: "female nurse"
        }
    ];

    const handleApplicationSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        toast({
            title: "Application Submitted!",
            description: "Your award application has been received. We will review it and notify you of the outcome.",
        });
        (event.target as HTMLFormElement).reset();
    };

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow">
                <section className="relative h-[50vh] flex items-center justify-center text-white">
                    <Image
                        src="https://images.unsplash.com/photo-1523875194681-bedd468c58bf?q=80&w=1740&auto=format&fit=crop"
                        alt="Awards and recognition"
                        fill
                        className="object-cover"
                        data-ai-hint="awards recognition"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="container mx-auto px-4 text-center relative">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-headline">
                            Scholarships & Awards
                        </h1>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto">
                            Celebrating achievement and supporting the next generation of leaders.
                        </p>
                    </div>
                </section>

                <section id="scholarships" className="py-16 bg-secondary/50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
                           <Award className="inline-block w-10 h-10 mr-2 text-primary" />
                           Available Scholarships
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {scholarships.map((scholarship, index) => (
                                <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow">
                                    <CardHeader>
                                        <CardTitle className="font-headline text-xl">{scholarship.title}</CardTitle>
                                        <Badge>Deadline: {new Date(scholarship.deadline).toLocaleDateString()}</Badge>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-muted-foreground">{scholarship.description}</p>
                                        <p className="text-sm mt-4"><strong>Eligibility:</strong> {scholarship.eligibility}</p>
                                    </CardContent>
                                    <CardFooter>
                                        <Button asChild variant="outline" className="w-full">
                                            <a href="#award-application">Apply Now</a>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                 <section id="learn-africa" className="py-16 bg-background">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
                            <Trophy className="inline-block w-10 h-10 mr-2 text-primary" />
                            LearnAfrica Awards
                        </h2>
                        <div className="relative">
                           <div className="absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
                            {learnAfricaAwards.map((item, index) => (
                                <div key={index} className={`flex items-center w-full mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                <div className="hidden md:flex md:w-5/12"></div>
                                <div className="hidden md:flex w-24 justify-center">
                                    <div className="z-10 bg-primary text-primary-foreground h-12 w-12 rounded-full flex items-center justify-center font-bold text-lg">{item.year}</div>
                                </div>
                                <div className="w-full md:w-5/12">
                                    <Card className="shadow-lg hover:shadow-xl transition-shadow">
                                    <CardHeader>
                                        <CardTitle className="font-headline text-xl">{item.event}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{item.description}</p>
                                    </CardContent>
                                    </Card>
                                </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="success-stories" className="py-16 bg-secondary/50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Student Success Stories</h2>
                        <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-4xl mx-auto">
                            <CarouselContent>
                                {studentSuccessStories.map((story, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-4 text-center">
                                    <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary">
                                        <AvatarImage src={story.avatar} alt={story.name} data-ai-hint={story.aiHint} />
                                        <AvatarFallback>{story.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <blockquote className="text-lg italic text-foreground/90 mb-4">
                                        "{story.story}"
                                    </blockquote>
                                    <p className="font-bold font-headline">{story.name}</p>
                                    <p className="text-sm text-muted-foreground">{story.program}</p>
                                    </div>
                                </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="hidden md:flex" />
                            <CarouselNext className="hidden md:flex" />
                        </Carousel>
                    </div>
                </section>
                
                <section id="award-application" className="py-16 bg-background">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
                            <FileUp className="inline-block w-10 h-10 mr-2 text-primary" />
                            Award Application Portal
                        </h2>
                        <Card className="max-w-4xl mx-auto p-6 md:p-8 shadow-lg">
                            <CardHeader>
                                <CardTitle>Apply for an Award</CardTitle>
                                <CardDescription>
                                    Complete the form below to submit your application for a scholarship or award.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleApplicationSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="applicant-name">Full Name</Label>
                                            <Input id="applicant-name" required placeholder="Jane Doe" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="student-id">Student ID</Label>
                                            <Input id="student-id" required placeholder="RIT/12345" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="award-select">Award/Scholarship Applying For</Label>
                                        <Select required>
                                            <SelectTrigger id="award-select">
                                                <SelectValue placeholder="Select an award" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {scholarships.map(s => <SelectItem key={s.title} value={s.title}>{s.title}</SelectItem>)}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="documents">Upload Supporting Documents</Label>
                                        <Input id="documents" type="file" required />
                                        <p className="text-xs text-muted-foreground">Please upload your transcript, essay, or other required documents in a single PDF file.</p>
                                    </div>
                                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Submit Application</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </section>
                
                <section id="notifications" className="py-16 bg-secondary/50">
                    <div className="container mx-auto px-4">
                         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
                            Award Announcements
                        </h2>
                        <Card className="max-w-4xl mx-auto p-6 shadow-lg">
                           <CardContent>
                             <p className="text-muted-foreground text-center">
                                The list of award winners for the current academic session will be announced here soon.
                                <br />
                                Stay tuned for updates!
                             </p>
                           </CardContent>
                        </Card>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
