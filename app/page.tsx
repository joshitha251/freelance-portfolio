import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Capabilities } from "@/components/capabilities"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Capabilities />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
