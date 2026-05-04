"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/chat", label: "Chat" },
  { href: "/journey", label: "Journey" },
  { href: "/dashboard", label: "Dashboard" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-semibold text-gray-900">
          Aria Health
        </Link>
        <div className="flex gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm ${
                pathname === href
                  ? "text-indigo-600 font-medium"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
