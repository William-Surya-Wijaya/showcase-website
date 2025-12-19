import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Artist
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/gallery" className="hover:opacity-80">Gallery</Link>
          <Link href="/collections" className="hover:opacity-80">Collections</Link>
          <Link href="/about" className="hover:opacity-80">About</Link>
        </nav>
      </div>
    </header>
  );
}
