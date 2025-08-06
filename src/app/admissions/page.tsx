import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, FileText, UserCheck } from "lucide-react";

export default function AdmissionsPage() {
  const applicationProcess = [
    {
      icon: <FileText className="w-10 h-10 text-primary" />,
      title: "Submit Application",
      description: "Complete the online application form with all required documents and submit it before the deadline.",
      date: "August 1st",
    },
    {
      icon: <UserCheck className="w-10 h-10 text-primary" />,
      title: "Application Review",
      description: "Our dedicated admissions team will carefully review your application and supporting documents.",
      date: "August 15th",
    },
    {
      icon: <CheckCircle2 className="w-10 h-10 text-primary" />,
      title: "Admission Decision",
      description: "You will receive your admission decision via email and through our student portal.",
      date: "September 1st",
    },
  ];

  const faqs = [
    {
      question: "What is the application deadline?",
      answer: "The application deadline for the upcoming academic year is July 31st. We encourage you to apply early to ensure a smooth process."
    },
    {
      question: "What are the required documents for application?",
      answer: "You will need your high school transcripts, a personal statement, two letters of recommendation, and standardized test scores (if applicable for your program)."
    },
    {
      question: "Is there an application fee?",
      answer: "Yes, there is a non-refundable application fee of $50. This fee covers the administrative cost of processing applications."
    },
    {
      question: "Can I apply for financial aid?",
      answer: "Absolutely. We offer a variety of scholarships and financial aid options. Please visit our Financial Aid page for more information and to apply."
    },
    {
      question: "When can I expect to receive an admission decision?",
      answer: "Admission decisions are typically sent out by September 1st. You will be notified via email."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[50vh] flex items-center justify-center text-white">
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1740&auto=format&fit=crop"
            alt="Students graduating"
            fill
            className="object-cover"
            data-ai-hint="graduating students"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="container mx-auto px-4 text-center relative">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-headline">
              Apply to Ritman College
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Begin your journey towards a brighter future. We're excited to welcome you.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Start Your Application
            </Button>
          </div>
        </section>

        <section id="application-process" className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">How to Apply</h2>
            <div className="relative">
                <div className="absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
                {applicationProcess.map((step, index) => (
                    <div key={index} className="flex md:items-center mb-12 md:mb-0">
                        <div className={`flex w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:justify-end' : 'md:pl-8 md:justify-start'}`}>
                           <Card className={`w-full md:max-w-md transition-shadow hover:shadow-xl ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                               <CardHeader>
                                   <div className="flex items-center gap-4">
                                     {index % 2 !== 0 && <div className="flex-grow"></div>}
                                     <div className={`p-3 rounded-full bg-primary/10 hidden md:flex`}>{step.icon}</div>
                                      <CardTitle className="font-headline text-xl">{step.title}</CardTitle>
                                   </div>
                               </CardHeader>
                               <CardContent>
                                   <p className="text-muted-foreground">{step.description}</p>
                               </CardContent>
                           </Card>
                        </div>
                        <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg z-10 shrink-0">
                          {index + 1}
                        </div>
                         <div className={`w-1/2 px-8 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </section>

        <section id="requirements" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Admission Requirements</h2>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-headline">Undergraduate Admissions</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground p-4">
                    - High School Diploma or equivalent. <br />
                    - Minimum GPA of 2.5 on a 4.0 scale. <br />
                    - Official Transcripts from all previously attended institutions. <br />
                    - Personal Statement or Essay. <br />
                    - Two letters of recommendation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-headline">Postgraduate Admissions</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground p-4">
                    - Bachelor's Degree from an accredited institution. <br />
                    - Minimum GPA of 3.0 on a 4.0 scale. <br />
                    - Official Transcripts from all previously attended institutions. <br />
                    - Statement of Purpose. <br />
                    - Curriculum Vitae (CV) or Resume. <br />
                    - Three letters of recommendation.
                  </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-headline">International Applicants</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground p-4">
                    - All requirements for the respective program (Undergraduate/Postgraduate). <br />
                    - Proof of English proficiency (e.g., TOEFL, IELTS) if English is not your first language. <br />
                    - Evaluation of foreign transcripts by a recognized credentialing agency.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section id="tuition" className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Tuition & Fees</h2>
            <Card className="max-w-4xl mx-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[60%] font-headline text-lg">Program</TableHead>
                      <TableHead className="text-right font-headline text-lg">Estimated Annual Tuition</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Undergraduate Programs</TableCell>
                      <TableCell className="text-right">$15,000</TableCell>
                    </TableRow>
                     <TableRow>
                      <TableCell className="font-medium">Postgraduate Programs</TableCell>
                      <TableCell className="text-right">$18,500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Additional Student Fees</TableCell>
                      <TableCell className="text-right">$1,200</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
            </Card>
             <p className="text-center text-muted-foreground mt-4 max-w-4xl mx-auto">
                Note: These are estimated costs. For a detailed breakdown, please contact the bursary department. Financial aid and scholarships are available.
            </p>
          </div>
        </section>

        <section id="faq" className="py-16 bg-background">
            <div className="container mx-auto px-4">
                 <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Frequently Asked Questions</h2>
                 <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                           <AccordionItem value={`item-${index}`} key={index}>
                               <AccordionTrigger className="text-lg font-headline text-left">{faq.question}</AccordionTrigger>
                               <AccordionContent className="text-base text-muted-foreground p-4">
                                   {faq.answer}
                               </AccordionContent>
                           </AccordionItem>
                        ))}
                    </Accordion>
                 </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
