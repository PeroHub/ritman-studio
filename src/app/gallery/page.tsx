
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";

export default function GalleryPage() {
  const images = [
    { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1740&auto=format&fit=crop", alt: "Students studying together", aiHint: "students studying" },
    { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1740&auto=format&fit=crop", alt: "Classroom lecture", aiHint: "lecture hall" },
    { src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1740&auto=format&fit=crop", alt: "Student volunteers", aiHint: "student volunteers" },
    { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1740&auto=format&fit=crop", alt: "Student presentation", aiHint: "student presentation" },
    { src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1740&auto=format&fit=crop", alt: "Student team discussion", aiHint: "team discussion" },
    { src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1740&auto=format&fit=crop", alt: "Graduation ceremony", aiHint: "graduation ceremony" },
    { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1740&auto=format&fit=crop", alt: "Students playing sports", aiHint: "students sports" },
    { src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1740&auto=format&fit=crop", alt: "Friends on campus", aiHint: "campus friends" },
    { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1740&auto=format&fit=crop", alt: "Group of students", aiHint: "students laughing" },
    { src: "https://images.unsplash.com/photo-1574610758891-5b809b6e6e2e?q=80&w=1740&auto=format&fit=crop", alt: "Science Laboratory", aiHint: "science laboratory" },
    { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1740&auto=format&fit=crop", alt: "Business meeting", aiHint: "business meeting" },
    { src: "https://images.unsplash.com/photo-1581091224003-01e4a1a365c5?q=80&w=1740&auto=format&fit=crop", alt: "Health science lab", aiHint: "health science" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[50vh] flex items-center justify-center text-white">
          <Image
            src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1740&auto=format&fit=crop"
            alt="Friends on campus"
            fill
            className="object-cover"
            data-ai-hint="campus friends"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="container mx-auto px-4 text-center relative">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-headline">
              Gallery
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              A glimpse into the vibrant life at Ritman College.
            </p>
          </div>
        </section>

        <section id="gallery-content" className="py-16 bg-background">
           <div className="container mx-auto px-4">
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {images.map((image, index) => (
                        <div key={index} className="break-inside-avoid">
                           <Image 
                            className="h-auto w-full rounded-lg shadow-md hover:shadow-xl transition-shadow" 
                            src={image.src} 
                            alt={image.alt}
                            width={500} 
                            height={700}
                            data-ai-hint={image.aiHint}
                           />
                        </div>
                    ))}
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
