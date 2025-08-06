
import Link from "next/link"
import { Mountain, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-secondary/70 text-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="text-lg font-headline">Ritman College</span>
          </Link>
          <p className="text-sm text-foreground/80">
            Fostering excellence, innovation, and leadership.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-foreground/80 hover:text-primary"><Facebook className="h-5 w-5" /></Link>
            <Link href="#" className="text-foreground/80 hover:text-primary"><Twitter className="h-5 w-5" /></Link>
            <Link href="#" className="text-foreground/80 hover:text-primary"><Instagram className="h-5 w-5" /></Link>
            <Link href="#" className="text-foreground/80 hover:text-primary"><Linkedin className="h-5 w-5" /></Link>
          </div>
        </div>
        <div>
          <h4 className="mb-4 font-bold font-headline">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/admissions" className="hover:text-primary">Admissions</Link></li>
            <li><Link href="/academics" className="hover:text-primary">Academics</Link></li>
            <li><Link href="/gallery" className="hover:text-primary">Gallery</Link></li>
            <li><Link href="/news" className="hover:text-primary">News & Events</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-bold font-headline">Student Life</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/student-life#campus-facilities" className="hover:text-primary">Campus Facilities</Link></li>
            <li><Link href="/student-life#clubs-organizations" className="hover:text-primary">Clubs</Link></li>
            <li><Link href="/student-life#gallery" className="hover:text-primary">Campus Moments</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-bold font-headline">Contact Us</h4>
          <address className="not-italic text-sm space-y-2 text-foreground/80">
            <p>104 Ikot Ekpene Road, Ikot Ekpene, Akwa Ibom State, Nigeria</p>
            <p>Email: <a href="mailto:info@ritmancollege.com" className="hover:text-primary">info@ritmancollege.com</a></p>
            <p>Phone: <a href="tel:+2348031234567" className="hover:text-primary">+234 803 123 4567</a></p>
          </address>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 py-4 text-sm md:flex-row">
          <p className="text-foreground/60">&copy; {new Date().getFullYear()} Ritman College. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-primary text-foreground/80">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-primary text-foreground/80">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
