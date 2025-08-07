
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NewsPage() {
    const news = [
    {
      title: "ICAN President Visits Ritman University; Pays Homage to Ikot Ekpene’s Paramount Ruler",
      date: "October 26, 2023",
      snippet: "As part of his visit to Ikot Ekpene, ICAN’s 60th President, Chief Davidson Chizuoke Stephen Alaribe, FCA, visited Ritman University, accompanied by Uyo District Chairman Edidem Utuk and Ikot Ekpene & District Society Chairman Festus Akpan Etukudoh, FCA. They were warmly received by the university’s leadership, including Founder Senator Emmanuel Ibok Essien, FNSE",
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
     {
      title: "Students Win National Debate Championship",
      date: "October 20, 2023",
      snippet: "Our debate team has brought home the trophy from the national championship, showcasing their exceptional public speaking and critical thinking skills.",
      image: "/images/ican-ritman.jpeg",
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
