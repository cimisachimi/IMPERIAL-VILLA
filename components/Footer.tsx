export function Footer() {
  return (
    <footer className="border-t border-line/60 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm text-ink/60">
        <span className="font-display text-grey-dark">Villa Imperial Syariah</span>
        <span>[Alamat villa — lengkapi di sini]</span>
        <span>© {new Date().getFullYear()} Villa Imperial Syariah</span>
      </div>
    </footer>
  );
}