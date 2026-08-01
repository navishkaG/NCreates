import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold">
        NCreates
      </Link>
      <div className="flex gap-6 text-sm font-medium">
        <Link href="/">Home</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}