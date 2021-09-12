import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentWidth, setcurrentWidth] = useState();

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 599) {
        setIsOpen(false);
      }
    });
  }, []);

  return (
    <div className={styles.header}>
      <Link href="/">
        <a>
          <Image
            src="/images/logo.svg"
            width={100}
            height={20}
            alt="Manage Landing Page Logo"
          />
        </a>
      </Link>
      <nav className={!isOpen ? styles.nav : styles.show}>
        <li>
          <Link href="/pricing">
            <a className="nav-list">Pricing</a>
          </Link>
        </li>
        <li>
          <Link href="/product">
            <a className="nav-list">Product</a>
          </Link>
        </li>
        <li>
          <Link href="/about-us">
            <a className="nav-list">About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/careers">
            <a className="nav-list">Careers</a>
          </Link>
        </li>
        <li>
          <Link href="/community">
            <a className="nav-list">Community</a>
          </Link>
        </li>
      </nav>

      <Link href="/get-started">
        <a className={styles.getstarted_btn_h}>Get Started</a>
      </Link>

      <button className={styles.dropdown} onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? (
          <Image
            src="/images/icon-hamburger.svg"
            height={20}
            width={25}
            alt="icon-hamburger"
          />
        ) : (
          <Image
            src="/images/icon-close.svg"
            height={20}
            width={20}
            alt="icon-close"
          />
        )}
      </button>
    </div>
  );
};

export default Header;
