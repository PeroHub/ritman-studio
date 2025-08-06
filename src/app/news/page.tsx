
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NewsPage() {
    const news = [
    {
      title: "Ritman College Celebrates 20 Years of Excellence",
      date: "October 26, 2023",
      snippet: "Join us as we mark two decades of academic achievement and community impact. The celebration includes a series of events throughout the month, culminating in a grand gala.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&h=400&auto=format&fit=crop",
      aiHint: "college campus",
    },
    {
      title: "Annual Sports Festival Kicks Off",
      date: "October 24, 2023",
      snippet: "Students showcase their athletic prowess in the most anticipated event of the year. The festival will run for a week with various competitions.",
      image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=600&h=400&auto=format&fit=crop",
      aiHint: "students sports",
    },
    {
      title: "New Research Center for AI and Robotics Unveiled",
      date: "October 22, 2023",
      snippet: "The new state-of-the-art facility will foster innovation and cutting-edge research in artificial intelligence and robotics, positioning Ritman as a leader in technology.",
      image: "https://images.unsplash.com/photo-1518314916383-a6b46a3423a6?q=80&w=600&h=400&auto=format&fit=crop",
      aiHint: "robotics lab",
    },
     {
      title: "Students Win National Debate Championship",
      date: "October 20, 2023",
      snippet: "Our debate team has brought home the trophy from the national championship, showcasing their exceptional public speaking and critical thinking skills.",
      image: "https://images.unsplash.com/photo-1549490102-4aa81c8e2197?q=80&w=600&h=400&auto=format&fit=crop",
      aiHint: "debate team",
    },
    {
      title: "Community Service Initiative Launched",
      date: "October 18, 2023",
      snippet: "Ritman College launches a new initiative focused on community service, encouraging students to give back and make a positive impact in the local area.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600&h=400&auto=format&fit=crop",
      aiHint: "volunteers working",
    },
    {
      title: "Art Exhibition 'Creativity Unbound' Opens",
      date: "October 15, 2023",
      snippet: "The fine arts department is proud to present its annual art exhibition, featuring stunning works from our talented students.",
      image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=600&h=400&auto=format&fit=crop",
      aiHint: "art gallery",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[50vh] flex items-center justify-center text-white">
          <Image
            src="https://images.unsplash.com/photo-1455743425380-9a4f326179e8?q=80&w=1740&auto=format&fit=crop"
            alt="Media studio"
            fill
            className="object-cover"
            data-ai-hint="media studio"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="container mx-auto px-4 text-center relative">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-headline">
              News & Events
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Stay up-to-date with the latest happenings at Ritman College.
            </p>
          </div>
        </section>

        <section id="news-list" className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((item, index) => (
                <Card key={index} className="flex flex-col overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl">
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
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
