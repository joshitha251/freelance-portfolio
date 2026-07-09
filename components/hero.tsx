"use client"

import { motion } from "motion/react"
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Dribbble,
} from "lucide-react"

const easing = [0.22, 1, 0.36, 1] as const

const socials = [
  { label: "GitHub", icon: Github, href: "https://github.com/joshitha251/" },
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/joshitha-b-648910357/" },
  { label: "Dribbble", icon: Dribbble, href: "https://dribbble.com/joshitha-b" },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative h-screen overflow-hidden px-4 py-6 sm:px-6 sm:py-8 lg:px-8"
    >
      <div className="mx-auto flex h-full max-w-6xl flex-col">

        {/* Top Content */}
        <div className="pt-12">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing }}
            className="flex justify-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground sm:text-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-2 animate-ping rounded-full bg-foreground/40" />
                <span className="relative inline-flex size-2 rounded-full bg-foreground" />
              </span>
              Available for freelance projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easing, delay: 0.1 }}
            className="mt-26 text-center text-[18vw] font-bold leading-[0.92] tracking-normal sm:text-[13vw] lg:text-[10rem]"
          >
            JOSHITHA
          </motion.h1>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto pb-8 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

          {/* Bottom Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easing, delay: 0.4 }}
            className="max-w-sm text-center lg:text-left"
          >
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Freelance Web Developer
            </h2>

            <p className="mt-6 text-sm  leading-relaxed text-muted-foreground">
              I build modern, responsive websites that help businesses
              establish a strong online presence.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href="#work"
                className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                View My Work
                <ArrowUpRight className="size-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2 text-sm font-medium transition-colors hover:bg-secondary"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Bottom Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easing, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-2 lg:flex-col lg:items-end"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm transition-colors hover:bg-secondary"
              >
                <s.icon className="size-4" />
                {s.label}
              </a>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  )
}