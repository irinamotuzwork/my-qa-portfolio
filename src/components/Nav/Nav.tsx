import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul className={styles.links}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/api-lab">API Lab</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/resume.pdf">Resume</Link></li>
        </ul>
      </div>
    </nav>
  );
}