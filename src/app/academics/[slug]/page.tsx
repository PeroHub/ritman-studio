
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { programs } from "@/data/programs";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const program = programs.find((p) => p.slug === params.slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[50vh] flex items-center justify-center text-white">
          <Image
            src={program.image}
            alt={program.title}
            fill
            className="object-cover"
            data-ai-hint={program.aiHint}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="container mx-auto px-4 text-center relative">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-headline">
              {program.title}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              {program.description}
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold font-headline mb-4">About the Program</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">{program.details.longDescription}</p>
                
                <h3 className="text-2xl font-bold font-headline mb-4">Core Curriculum</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {program.details.curriculum.map((course, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold font-headline mb-4">Career Opportunities</h3>
                <div className="flex flex-wrap gap-2">
                  {program.details.careerProspects.map((career, index) => (
                    <Badge key={index} variant="secondary">{career}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="font-headline">Program Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Faculty</h4>
                      <p className="text-muted-foreground">{program.details.faculty}</p>
                    </div>
                     <div>
                      <h4 className="font-semibold">Duration</h4>
                      <p className="text-muted-foreground">{program.details.duration}</p>
                    </div>
                     <div>
                      <h4 className="font-semibold">Head of Department</h4>
                      <p className="text-muted-foreground">{program.details.head}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
