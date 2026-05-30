import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    ["Audio Description", "Investor Relations", "Legal Notices"],
    ["Help Centre", "Jobs", "Cookie Preferences"],
    ["Gift Cards", "Terms of Use", "Corporate Information"],
    ["Media Centre", "Privacy", "Contact Us"],
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Social Icons */}
        <div className={styles.socialIcons}>
          <a href="#" aria-label="Facebook" onClick={(e) => e.preventDefault()}>
            <FaFacebookF />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            onClick={(e) => e.preventDefault()}
          >
            <FaInstagram />
          </a>
          <a href="#" aria-label="Twitter" onClick={(e) => e.preventDefault()}>
            <FaTwitter />
          </a>
          <a href="#" aria-label="YouTube" onClick={(e) => e.preventDefault()}>
            <FaYoutube />
          </a>
        </div>

        {/* Footer Links */}
        <div className={styles.linkGrid}>
          {footerLinks.map((column, colIndex) => (
            <div key={colIndex} className={styles.column}>
              {column.map((link, linkIndex) => (
                <a
                  key={`${colIndex}-${linkIndex}`}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className={styles.link}
                  aria-label={link}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          © 1997-{new Date().getFullYear()} Netflix, Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
