export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:items-center">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Muhammad Tsabit Alfikri.
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          Purwokerto · Indonesia
        </div>
      </div>
    </footer>
  );
}
