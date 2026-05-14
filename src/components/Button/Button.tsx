import styles from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  href?: string;
};

export default function Button({ children, href }: Props) {
  if (href) {
    return (
      <a href={href} className={styles.button}>
        {children}
      </a>
    );
  }

  return <button className={styles.button}>{children}</button>;
}