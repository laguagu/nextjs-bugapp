"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaWorm } from "react-icons/fa6";
import classNames from "classnames";

export default function NavBar() {
  const currenPath = usePathname();

  
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
            className={classNames({
              "text-zinc-900": link.href === currenPath,
              "text-zinc-500": link.href !== currenPath,
              "hover:text-zinc-800 transition-colors": true
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
