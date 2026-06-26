export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p className="flex items-center gap-2 font-medium text-foreground">
          <span className="inline-block size-2 rounded-full bg-foreground" />
          Joshitha
        </p>
        <p>Freelance Web Developer · Available worldwide</p>
        <p>&copy; {new Date().getFullYear()} Joshitha. All rights reserved.</p>
      </div>
    </footer>
  )
}
