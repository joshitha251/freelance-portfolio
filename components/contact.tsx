"use client"

import { useState } from "react"
import { motion } from "motion/react"
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Github,
  Linkedin,
  Instagram,
  Check,
} from "lucide-react"
import { Reveal } from "@/components/motion-primitives"

const socials = [
  { label: "GitHub", icon: Github, href: "https://github.com/joshitha251/" },
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/joshitha-b-648910357/" },
  { label: "Instagram", icon: Instagram, href: "#" },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="scroll-mt-24 px-4 pb-24 pt-12 sm:pb-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            / Contact
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s Build Something Great Together
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Form */}
          <Reveal>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
                  />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
                  />
                </Field>
              </div>
              <Field label="Message" htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
                />
              </Field>
              <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                {sent ? (
                  <>
                    <Check className="size-4" />
                    Message sent
                  </>
                ) : (
                  <>
                    Send message
                    <ArrowUpRight className="size-4" />
                  </>
                )}
              </motion.button>
            </form>
          </Reveal>

          {/* Direct contact */}
          <Reveal className="flex flex-col gap-3">
            <ContactRow
              icon={Mail}
              label="Email"
              value="joshitha1903@gmail.com"
              href="mailto:joshitha1903@gmail.com"
            />
            <ContactRow
              icon={MessageCircle}
              label="WhatsApp"
              value="+91 8639742879"
              href="https://wa.me/8639742879"
            />
            <div className="mt-2 rounded-2xl border border-border bg-card p-5">
              <p className="text-sm font-medium text-muted-foreground">
                Follow along
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:bg-secondary"
                  >
                    <s.icon className="size-4" />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="text-sm font-medium text-foreground">{label}</span>
      {children}
    </label>
  )
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType
  label: string
  value: string
  href: string
}) {
  return (
    <a
      href={href}
      className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:bg-secondary"
    >
      <div className="flex items-center gap-4">
        <span className="inline-flex size-10 items-center justify-center rounded-full bg-secondary text-foreground">
          <Icon className="size-5" />
        </span>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            {label}
          </p>
          <p className="text-sm font-medium text-foreground">{value}</p>
        </div>
      </div>
      <ArrowUpRight className="size-5 text-muted-foreground transition-transform duration-300 group-hover:rotate-45 group-hover:text-foreground" />
    </a>
  )
}
