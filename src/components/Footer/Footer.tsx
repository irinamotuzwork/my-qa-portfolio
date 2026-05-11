import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>© 2026 Irina Motuz. All rights reserved.</p>

        <div className={styles.links}>
          <a href="https://github.com">
            GitHub
          </a>

          <a href="https://linkedin.com">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
