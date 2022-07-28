import Link from "next/link";
import { useState } from "react";
import styles from "../styles/components/Header.module.scss";
import SideNav from "./SideNav";

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => setShowNav(!showNav);

  return (
    <header className={styles.container}>
      <nav className={`${styles.nav} ${showNav ? styles.show : ""}`}>
        <div className={styles.navLeft}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about-us">
            <a>About us</a>
          </Link>
          <Link href="/contact-us">
            <a>Contact us</a>
          </Link>
        </div>
        <Link href="/login">
          <button className={styles.login}>Login</button>
        </Link>
      </nav>

      {showNav ? (
        // close Icon
        <button className={styles.closeIcon} onClick={toggleNav}>
          &times;
        </button>
      ) : (
        // hamburger
        <button
          aria-label="Menu button"
          className={styles.menuIcon}
          onClick={toggleNav}
        >
          <div aria-hidden />
          <div aria-hidden />
          <div aria-hidden />
        </button>
      )}

      {/* backdrop of sidenav */}
      {showNav && (
        <div
          className={styles.backdrop}
          onClick={() => setShowNav(false)}
        ></div>
      )}
      {/* sidenav */}
      <SideNav showNav={showNav} setShowNav={setShowNav} />
    </header>
  );
}
