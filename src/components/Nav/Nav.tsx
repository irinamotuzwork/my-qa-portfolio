"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      // shrink + shadow
      setScrolled(currentY > 10);

      // hide/show on direction
      if (currentY > lastScrollY && currentY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        ${styles.navbar}
        ${scrolled ? styles.scrolled : ""}
        ${hidden ? styles.hidden : ""}
      `}
    >
      <div className={styles.container}>

        <div className={styles.logo}>
          Irina Motuz
        </div>

        <ul className={styles.links}>
          <li><Link className={`${styles.link} ${isActive("/") ? styles.active : ""}`} href="/">Home</Link></li>
          <li><Link className={`${styles.link} ${isActive("/about") ? styles.active : ""}`} href="/about">About</Link></li>
          <li><Link className={`${styles.link} ${isActive("/api-lab") ? styles.active : ""}`} href="/api-lab">API Lab</Link></li>
          <li><Link className={`${styles.link} ${isActive("/blog") ? styles.active : ""}`} href="/blog">Blog</Link></li>
          <li><Link className={styles.cta} href="/resume.pdf">Resume</Link></li>
        </ul>

        <button
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${open ? styles.open : ""}`}>
        <Link href="/" onClick={() => setOpen(false)} className={isActive("/") ? styles.mobileActive : ""}>Home</Link>
        <Link href="/about" onClick={() => setOpen(false)} className={isActive("/about") ? styles.mobileActive : ""}>About</Link>
        <Link href="/api-lab" onClick={() => setOpen(false)} className={isActive("/api-lab") ? styles.mobileActive : ""}>API Lab</Link>
        <Link href="/blog" onClick={() => setOpen(false)} className={isActive("/blog") ? styles.mobileActive : ""}>Blog</Link>
        <Link href="/resume.pdf"target="_blank" rel="noopener noreferrer" className={styles.cta}>Resume</Link>
      </div>
    </nav>
  );
}