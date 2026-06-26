"use client"

import { motion, type Variants } from "motion/react"
import type { ReactNode } from "react"

const easing = [0.22, 1, 0.36, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easing } },
}

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easing } },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

export function Reveal({
  children,
  className,
  variants = fadeUp,
  once = true,
}: {
  children: ReactNode
  className?: string
  variants?: Variants
  once?: boolean
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
    >
      {children}
    </motion.div>
  )
}

export function RevealGroup({
  children,
  className,
  once = true,
}: {
  children: ReactNode
  className?: string
  once?: boolean
}) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
    >
      {children}
    </motion.div>
  )
}
