
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, Building, FlaskConical, Landmark } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AcademicsPage() {
  const faculties = [
    {
      name: "Faculty of Natural and Applied Sciences",
      icon: <FlaskConical className="w-10 h-10 text-primary" />,
      departments: [
        { name: "Computer Science", head: "Dr. Evelyn Chen" },
        { name: "Microbiology", head: "Dr. Ben Carter" },
        { name: "Biochemistry", head: "Dr. Olivia Rodriguez" },
        { name: "Industrial Chemistry", head: "Dr. Samuel Jones" },
      ],
      image: "https://images.unsplash.com/photo-1574610758891-5b809b6e6e2e?q=80&w=1740&auto=format&fit=crop",
      aiHint: "science laboratory",
    },
    {
      name: "Faculty of Social and Management Sciences",
      icon: <Building className="w-10 h-10 text-primary" />,
      departments: [
        { name: "Business Administration", head: "Prof. David Lee" },
        { name: "Mass Communication", head: "Dr. Sarah Miller" },
        { name: "Accounting", head: "Mr. Michael Brown" },
        { name: "Economics", head: "Dr. Grace Williams" },
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1740&auto=format&fit=crop",
      aiHint: "business meeting",
    },
    {
      name: "Faculty of Health Sciences",
      icon: <Landmark className="w-10 h-10 text-primary" />,
      departments: [
        { name: "Nursing Science", head: "Dr. Helen Davis" },
        { name: "Medical Laboratory Science", head: "Prof. Robert Wilson" },
        { name: "Public Health", head: "Dr. Jessica Martinez" },
      ],
      image: "https://images.unsplash.com/photo-1581091224003-01e4a1a365c5?q=80&w=1740&auto=format&fit=crop",
      aiHint: "health science",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[50vh] flex items-center justify-center text-white">
          <Image
            src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1740&auto=format&fit=crop"
            alt="Library with students"
            fill
            className="object-cover"
            data-ai-hint="college library"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="container mx-auto px-4 text-center relative">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-headline">
              Our Academic Programs
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Explore our diverse range of faculties and departments, designed to foster innovation and leadership.
            </p>
          </div>
        </section>

        <section id="faculties" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
              Faculties and Departments
            </h2>
            <div className="space-y-16">
              {faculties.map((faculty, index) => (
                <Card key={index} className="overflow-hidden md:grid md:grid-cols-2 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative h-64 md:h-auto">
                     <Image
                      src={faculty.image}
                      alt={faculty.name}
                      fill
                      className="object-cover"
                      data-ai-hint={faculty.aiHint}
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-4 mb-4">
                      {faculty.icon}
                      <h3 className="text-2xl font-bold font-headline">{faculty.name}</h3>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="font-semibold">Departments</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            {faculty.departments.map((dept, i) => (
                              <li key={i}>
                                <strong>{dept.name}</strong> - Head: {dept.head}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="academic-resources" className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
              Academic Resources
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <CardHeader>
                  <Book className="w-12 h-12 mx-auto text-primary" />
                  <CardTitle className="mt-4 font-headline">College Library</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Access thousands of books, journals, and digital resources to support your studies and research.
                  </p>
                </CardContent>
              </Card>
               <Card className="text-center p-6">
                <CardHeader>
                  <FlaskConical className="w-12 h-12 mx-auto text-primary" />
                  <CardTitle className="mt-4 font-headline">Research Labs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    State-of-the-art laboratories for practical learning and cutting-edge scientific research.
                  </p>
                </CardContent>
              </Card>
               <Card className="text-center p-6">
                <CardHeader>
                  <Building className="w-12 h-12 mx-auto text-primary" />
                  <CardTitle className="mt-4 font-headline">Career Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get guidance, internship opportunities, and career counseling to prepare for your future.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
