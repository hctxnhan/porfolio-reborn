import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Work", path: "/work" },
  { name: "Blog", path: "/blog" },
];

export function Navbar() {
  return (
    <nav className="sticky flex w-full items-center justify-between px-8 py-4">
      <div className="flex items-center justify-center gap-4">
        <div className="h-12 w-12 rounded-full bg-text"></div>
        <Link className="text-lg" href="/">
          thanhnhan.js
        </Link>
      </div>
      <ul className="flex gap-11 uppercase">
        {navItems.map((item, index) => (
          <Link href={item.path} key={index}>
            {item.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
