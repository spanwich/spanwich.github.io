"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LangSwitcher from "@/components/lang-switcher";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header>
      <nav className="relative flex w-full items-center justify-between bg-[#FBFBFB] px-6 py-3 shadow-md shadow-black/5 dark:bg-dark-200 dark:shadow-black/10">
        <Link href="/" className="base-bold text-dark-100 dark:text-light-900">
          Spanwich
        </Link>
        <ul className="flex flex-row items-center gap-5">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`body-medium transition-colors hover:text-primary-500 ${
                  pathname === href
                    ? "text-primary-500"
                    : "text-dark-400 dark:text-light-500"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <LangSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
}
