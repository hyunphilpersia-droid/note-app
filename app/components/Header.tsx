"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Index" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Valorant Index home">
        <Image className="wordmark-photo" src="/images/valorantlogo.png" alt="Valorant logo" width={28} height={28} priority />
        <span>Yawnpeek</span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return <Link className={`nav-link ${isActive ? "is-active" : ""}`} href={link.href} key={link.href} aria-current={isActive ? "page" : undefined}>{link.label}</Link>;
        })}
      </nav>
      <span className="header-note">Captain / IGL</span>
    </header>
  );
}