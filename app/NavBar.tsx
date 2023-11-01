import Link from "next/link";
import React from "react";
import { FaWorm } from "react-icons/fa6";

export default function NavBar() {
  const links = [
    { label: "Etusivu", href: "/" },
    { label: "Bugit", href: "/bugs" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <FaWorm />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-zinc-400 hover:text-zinc-800 transition-colors"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
