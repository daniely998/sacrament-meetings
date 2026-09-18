// components/NavLinks.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary">
      <ul className="flex gap-4">
        <li>
          <Link
            href="/"
            className={pathname === "/" ? "font-bold text-blue-700" : ""}
            aria-current={pathname === "/" ? "page" : undefined}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/meetings"
            className={pathname === "/meetings" ? "font-bold text-blue-700" : ""}
            aria-current={pathname === "/meetings" ? "page" : undefined}
          >
            Meetings
          </Link>
        </li>
      </ul>
    </nav>
  );
}