import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import Form from "./Form";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className={styles.section_1}>
        <h2>Simplify how your team works today.</h2>
        <Link href="/get-started">
          <a className={styles.getstarted_btn_f}>Get Started</a>
        </Link>
      </div>
      <div className={styles.footer}>
        <div className={styles.section_2}>
          <div className={styles.r1}>
            <Link href="/">
              <a className={styles.logo_2}>
                <Image
                  src="/images/logo.svg"
                  width={100}
                  height={20}
                  alt="Manage Landing Page Logo"
                />
              </a>
            </Link>

            <ul className={styles.social_link}>
              <li>
                <Link href="/facebook">
                  <a>
                    <i className="fab fa-facebook fa-2x"></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/youtube">
                  <a>
                    <i className="fab fa-youtube fa-2x"></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/twitter">
                  <a>
                    <i className="fab fa-twitter fa-2x"></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/pinterest">
                  <a>
                    <i className="fab fa-pinterest fa-2x"></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/instagram">
                  <a>
                    <i className="fab fa-instagram fa-2x"></i>
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.navigations}>
            <ul className="nav_1">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  <a>Pricing</a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a>Products</a>
                </Link>
              </li>
              <li>
                <Link href="/about-us">
                  <a> About Us</a>
                </Link>
              </li>
            </ul>

            <ul className="nav_2">
              <li>
                <Link href="/careers">
                  <a> Careers </a>
                </Link>
              </li>
              <li>
                <Link href="/community">
                  <a> Community </a>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy">
                  <a> Privacy Policy </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.r3}>
            <Form />
            <h3 className={styles.copyright_text}>
              Copyright 2020. All Rights Reserved
            </h3>
          </div>
        </div>
      </div>
      <div className={styles.attribution}>
        Challenge by
        <Link
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          <a>Frontend Mentor</a>
        </Link>
        . Coded by{" "}
        <Link href="https://github.com/Syntacticdev">
          <a>SYNTACTIC DEV</a>
        </Link>
        .
      </div>
    </div>
  );
};

export default Footer;
