
"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Menu, Mountain } from "lucide-react"

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false)

  const closeSheet = () => setSheetOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold" onClick={closeSheet}>
          <Mountain className="h-6 w-6 text-primary" />
          <span className="text-lg font-headline">Ritman College</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="/" className="transition-colors hover:text-primary">Home</Link>
          <Link href="/admissions" className="transition-colors hover:text-primary">Admissions</Link>
          <Link href="/academics" className="transition-colors hover:text-primary">Academics</Link>
          <Link href="/student-life" className="transition-colors hover:text-primary">Student Life</Link>
          <Link href="/contact" className="transition-colors hover:text-primary">Contact</Link>
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <Button>Apply Now</Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2 font-bold" onClick={closeSheet}>
                  <Mountain className="h-6 w-6 text-primary" />
                  <span className="text-lg font-headline">Ritman College</span>
                </Link>
                <nav className="flex flex-col gap-4 text-lg">
                  <Link href="/" className="transition-colors hover:text-primary" onClick={closeSheet}>Home</Link>
                  <Link href="/admissions" className="transition-colors hover:text-primary" onClick={closeSheet}>Admissions</Link>
                  <Link href="/academics" className="transition-colors hover:text-primary" onClick={closeSheet}>Academics</Link>
                  <Link href="/student-life" className="transition-colors hover:text-primary" onClick={closeSheet}>Student Life</Link>
                  <Link href="/contact" className="transition-colors hover:text-primary" onClick={closeSheet}>Contact</Link>
                </nav>
                <Button className="w-full" onClick={closeSheet}>Apply Now</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
