"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Plus } from "lucide-react"
import { Reveal, RevealGroup, fadeUp } from "@/components/motion-primitives"

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "AI-Powered Web Development",
]

const tools = [
  "Figma",
  "Framer Motion",
  "v0",
  "Git",
  "GitHub",
  "VS Code",
  "Vercel",
]

const services = [
  {
    title: "Business Website Development",
    image: "/projects/business.png",
    description:
      "I can build professional business websites that help establish trust, showcase your services, and make it easier for customers to find and contact you online. Every website is designed to be responsive, fast-loading, and tailored to represent your brand while creating a strong first impression.",
  },

  {
    title: "Landing Page Development",
    image: "/projects/landing.png",
    description:
      "A landing page is designed with one clear goal—whether it's generating leads, promoting a product, or increasing sales. I create clean, fast, and conversion-focused landing pages with compelling layouts and clear call-to-action sections that encourage visitors to take the next step.",
  },

  {
    title: "Portfolio Websites",
    image: "/projects/portfolio2.png",
    description:
      "A portfolio website is the perfect way to showcase your skills, projects, and achievements in a professional and visually appealing way. I design modern, responsive portfolios that highlight your work, build credibility, and help you make a strong first impression with clients or employers.",
  },

  {
    title: "Website Redesign",
    image: "/projects/redesign.png",
    description:
      "An outdated website can make your business appear less trustworthy and drive potential customers away. I redesign existing websites with a modern look, improved user experience, faster performance, and mobile-friendly layouts while preserving your brand identity and business goals.",
  },

  {
    title: "Responsive Website Design",
    image: "/projects/responsive.png",
    description:
      "Your website should deliver a seamless experience on every device, from smartphones to desktops. I build fully responsive websites that automatically adapt to different screen sizes, ensuring fast performance, easy navigation, and a consistent user experience for every visitor.",
  },

  {
    title: "Google Business Profile Setup",
    image: "/projects/google.png",
    description:
      "A Google Business Profile helps your business appear on Google Search and Maps, making it easier for local customers to discover and contact you. I set up and optimize your profile with accurate business information, photos, and essential details to improve your online visibility and credibility.",
  },

  {
    title: "SEO Setup",
    image: "/projects/seo.png",
    description:
      "Search Engine Optimization (SEO) is the process of improving your website so it has a better chance of appearing in Google search results when potential customers search for your products or services. I implement essential SEO, including proper heading structure, and fast-loading pages to help improve your website's visibility and reach.",
  },
]

export function Capabilities() {

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="skills" className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                / Skills
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Technologies I work with
              </h2>
            </Reveal>

            <RevealGroup className="mt-8 flex flex-wrap gap-2.5">
              {skills.map((s) => (
                <motion.span
                  key={s}
                  variants={fadeUp}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {s}
                </motion.span>
              ))}
            </RevealGroup>
          </div>

          <div>
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                / Tools
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                My everyday toolkit
              </h2>
            </Reveal>

            <RevealGroup className="mt-8 flex flex-wrap gap-2.5">
              {tools.map((t) => (
                <motion.span
                  key={t}
                  variants={fadeUp}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {t}
                </motion.span>
              ))}
            </RevealGroup>
          </div>
        </div>

        {/* Services */}
        <div id="services" className="mt-24 scroll-mt-24 sm:mt-32">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              / Services
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              What I can build for you
            </h2>
          </Reveal>

          <RevealGroup className="mt-10 border-t border-border">
            {services.map((service, i) => (
      <motion.div
        key={service.title}
        variants={fadeUp}
        className="border-b border-border"
      >
        {/* Accordion Header */}
        <button
          onClick={() => toggleAccordion(i)}
          className="group flex w-full items-center justify-between py-7 text-left transition-colors hover:bg-secondary/40"
        >
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span className="font-mono text-xs text-muted-foreground sm:text-sm">
              {String(i + 1).padStart(2, "0")}
            </span>

            <span className="text-xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
              {service.title}
            </span>
          </div>

          <Plus
            className={`size-6 transition-transform duration-300 ${
              openIndex === i ? "rotate-45" : ""
            }`}
          />
        </button>

        {/* Accordion Body */}
        <AnimatePresence>
          {openIndex === i && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <div className="mb-7 rounded-3xl bg-zinc-900 p-6 lg:p-8">

                <div className="grid gap-8 lg:grid-cols-[1.6fr_0.8fr]">

                  {/* Left */}
                  <div>

                    <p className="text-lg leading-8 text-zinc-300 sm:text-xl">
                      {service.description}
                    </p>

                  </div>

                  {/* Right */}

                  <div className="overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-950">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    ))}
  </RevealGroup>
        </div>
      </div>
    </section>
  )
}
