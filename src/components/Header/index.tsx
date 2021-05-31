import { ActiveLink } from "../ActiveLink";
import { SignInButton } from "../SignInButton";

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <img src="/images/logo.svg" alt="Logo ignews" />
        <nav>
          <ActiveLink activeClasName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClasName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
