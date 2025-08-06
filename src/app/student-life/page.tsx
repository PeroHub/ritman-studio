
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Shield, Heart, Utensils, Home, Trophy, PaintBrush } from "lucide-react";

export default function StudentLifePage() {
  const clubs = [
    { name: "Debate Club", icon: <Users className="w-8 h-8 text-primary" /> },
    { name: "Drama Club", icon: <PaintBrush className="w-8 h-8 text-primary" /> },
    { name: "Sports Club", icon: <Trophy className="w-8 h-8 text-primary" /> },
    { name: "Tech Club", icon: <Shield className="w-8 h-8 text-primary" /> },
  ];

  const facilities = [
    {
      name: "Modern Hostels",
      description: "Comfortable and secure on-campus accommodation with all necessary amenities.",
      icon: <Home className="w-12 h-12 text-primary" />,
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1780&auto=format&fit=crop",
      aiHint: "hostel room"
    },
    {
      name: "Cafeteria & Dining",
      description: "A variety of nutritious and delicious meal options available throughout the day.",
      icon: <Utensils className="w-12 h-12 text-primary" />,
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1771&auto=format&fit=crop",
      aiHint: "cafeteria food"
    },
    {
      name: "Sports Complex",
      description: "State-of-the-art facilities for various sports, including football, basketball, and more.",
      icon: <Trophy className="w-12 h-12 text-primary" />,
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1770&auto=format&fit=crop",
      aiHint: "sports field"
    },
    {
      name: "Health & Wellness Center",
      description: "Access to medical services and wellness programs to support your physical and mental health.",
      icon: <Heart className="w-12 h-12 text-primary" />,
      image: "https://images.unsplash.com/photo-1599852932333-35a2964598ae?q=80&w=1740&auto=format&fit=crop",
      aiHint: "wellness center"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[50vh] flex items-center justify-center text-white">
          <Image
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1740&auto=format&fit=crop"
            alt="Group of students"
            fill
            className="object-cover"
            data-ai-hint="students laughing"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="container mx-auto px-4 text-center relative">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-headline">
              Vibrant Student Life
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Experience a rich and engaging campus life outside the classroom.
            </p>
          </div>
        </section>

        <section id="campus-facilities" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
              Campus Facilities
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {facilities.map((facility, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative h-56">
                    <Image src={facility.image} alt={facility.name} fill className="object-cover" data-ai-hint={facility.aiHint} />
                  </div>
                  <CardHeader className="flex-row items-center gap-4">
                    {facility.icon}
                    <CardTitle className="font-headline">{facility.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{facility.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="clubs-organizations" className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
              Clubs & Organizations
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {clubs.map((club, index) => (
                <Card key={index} className="text-center p-6 flex flex-col items-center justify-center">
                    {club.icon}
                    <h3 className="text-xl font-bold mt-4 font-headline">{club.name}</h3>
                </Card>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">...and many more! Find your passion and join a community.</p>
          </div>
        </section>

        <section id="gallery" className="py-16 bg-background">
           <div className="container mx-auto px-4">
               <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Campus Moments</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="grid gap-4">
                        <Image className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1740&auto=format&fit=crop" alt="Students studying together" width={500} height={700} data-ai-hint="students studying"/>
                        <Image className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1740&auto=format&fit=crop" alt="Classroom lecture" width={500} height={500} data-ai-hint="lecture hall"/>
                    </div>
                    <div className="grid gap-4">
                         <Image className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1740&auto=format&fit=crop" alt="Student volunteers" width={500} height={500} data-ai-hint="student volunteers"/>
                        <Image className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1740&auto=format&fit=crop" alt="Student presentation" width={500} height={700} data-ai-hint="student presentation"/>
                    </div>
                    <div className="grid gap-4">
                        <Image className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1740&auto=format&fit=crop" alt="Student team discussion" width={500} height={700} data-ai-hint="team discussion"/>
                        <Image className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1740&auto=format&fit=crop" alt="Graduation ceremony" width={500} height={500} data-ai-hint="graduation ceremony"/>
                    </div>
                    <div className="grid gap-4">
                        <Image className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1740&auto=format&fit=crop" alt="Students playing sports" width={500} height={500} data-ai-hint="students sports"/>
                        <Image className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1740&auto=format&fit=crop" alt="Friends on campus" width={500} height={700} data-ai-hint="campus friends"/>
                    </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
