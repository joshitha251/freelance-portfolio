"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { ArrowUpRight, Github } from "lucide-react"
import { Reveal, RevealGroup, fadeUp } from "@/components/motion-primitives"

type Project = {
  title: string
  description: string
  tech: string[]
  image: string
  demo: string
}

const projects: Project[] = [
  {
    title: "Cafe Website",
    description:
      "A warm, inviting site for a local coffee shop with menu and online reservations.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/projects/cafe.png",
    demo: "https://bean-and-brew-ten.vercel.app/",
  },
  {
    title: "Gym Website",
    description:
      "A bold fitness brand site featuring class schedules, trainer profiles and membership plans.",
    tech: ["React", "Tailwind CSS", "Node.js"],
    image: "/projects/gym.png",
    demo: "https://forge-fitness-mauve.vercel.app/",
  },
  {
    title: "Web Agency Website",
    description:
      "A sleek, modern site for a web development agency that builds websites, showcasing services and portfolio.",
    tech: ["Next.js", "Tailwind CSS", "SEO"],
    image: "/projects/school.png",
    demo: "https://web-agency-oomi.vercel.app/",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A minimalist personal portfolio with smooth animations and an emphasis on typography.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image: "/projects/portfolio.png",
    demo: "#",
  },
]

export function Projects() {
  return (
    <section id="work" className="scroll-mt-24 px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            / Work
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Featured Work
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-muted-foreground">
            A selection of websites I&apos;ve designed and developed across
            different industries.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-foreground/30"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <Image
                  src={p.image || "/placeholder.svg"}
                  alt={`${p.title} preview`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3 pt-2">
                  <a
                    href={p.demo}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                  >
                    Live Demo
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </RevealGroup>

        <Reveal className="mt-12">
          <div className="rounded-3xl border border-border bg-card p-8 text-center sm:p-12">
            <p className="text-balance text-xl font-medium tracking-tight sm:text-2xl">
              I can build similar websites customized for your business
              requirements.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Start a project
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
