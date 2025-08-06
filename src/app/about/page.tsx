
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookOpen, Target, Video } from "lucide-react";

export default function AboutPage() {
  const historyTimeline = [
    {
      year: "2003",
      event: "Foundation and Establishment",
      description: "Ritman College was founded with the vision of providing world-class education in Nigeria.",
    },
    {
      year: "2008",
      event: "First Graduating Class",
      description: "Celebrated the graduation of our inaugural class, who have gone on to achieve great success.",
    },
    {
      year: "2015",
      event: "Campus Expansion",
      description: "Opened new state-of-the-art facilities, including a modern library and science laboratories.",
    },
    {
      year: "2023",
      event: "20th Anniversary",
      description: "Marked two decades of academic excellence, innovation, and community impact.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[50vh] flex items-center justify-center text-white">
          <Image
            src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1740&auto=format&fit=crop"
            alt="College campus building"
            fill
            className="object-cover"
            data-ai-hint="college campus"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="container mx-auto px-4 text-center relative">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-headline">
              About Ritman College
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              A legacy of excellence and a commitment to shaping future leaders.
            </p>
          </div>
        </section>

        <section id="history" className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
              {historyTimeline.map((item, index) => (
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

        <section id="leadership" className="py-16 bg-background">
          <div className="container mx-auto px-4">
             <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Leadership</h2>
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <Card className="p-6 text-center">
                    <Video className="w-16 h-16 mx-auto text-primary mb-4"/>
                    <h3 className="text-2xl font-bold font-headline">Chairman's Statement</h3>
                    <p className="text-muted-foreground mt-2 mb-4">Watch a message from our chairman on our vision and commitment to excellence.</p>
                     <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <p className="text-muted-foreground">Video coming soon</p>
                    </div>
                </Card>
                 <Card className="p-6">
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <Avatar className="w-32 h-32 border-4 border-primary">
                            <AvatarImage src="https://images.unsplash.com/photo-1580894732444-8485b630265a?q=80&w=200&auto=format&fit=crop" data-ai-hint="professional woman"/>
                            <AvatarFallback>PP</AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="text-2xl font-bold font-headline">Proprietress Profile</h3>
                            <p className="text-muted-foreground mt-2">Our proprietress is a visionary leader dedicated to educational advancement and student empowerment. Her leadership continues to inspire our community.</p>
                        </div>
                    </div>
                 </Card>
             </div>
          </div>
        </section>

        <section id="mission-vision" className="py-16 bg-secondary/50">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <BookOpen className="w-8 h-8 text-primary"/>
                            </div>
                            <h3 className="text-2xl font-bold font-headline">Our Mission</h3>
                        </div>
                        <p className="text-muted-foreground mt-4">To provide a transformative educational experience that develops knowledgeable, skilled, and ethical leaders who will contribute positively to society.</p>
                    </Card>
                    <Card className="p-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <Target className="w-8 h-8 text-primary"/>
                            </div>
                            <h3 className="text-2xl font-bold font-headline">Our Vision</h3>
                        </div>
                        <p className="text-muted-foreground mt-4">To be a leading institution of higher learning, recognized for our commitment to academic excellence, innovative research, and community engagement.</p>
                    </Card>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
