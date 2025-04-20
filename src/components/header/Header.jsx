import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleLanguage = () => setLanguageOpen(!languageOpen);

  const changeLanguage = (lang) => {
    setSelectedLang(lang);
    setLanguageOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link to="/" className={styles.logo}>
          <span>KAT</span><span className={styles.vr}>VR</span>
        </Link>

        <div className={styles.language} onClick={toggleLanguage}>
          {selectedLang}
          {languageOpen && (
            <ul className={styles.languageDropdown}>
              {["EN", "Arabic", "Chinese", "French", "German", "Polish", "Ukrainian"].map((lang) => (
                <li key={lang} onClick={() => changeLanguage(lang)}>
                  {lang}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <Link to="/">About</Link>
        <Link to="/">Tech</Link>
        <Link to="/">Benefits</Link>
        <Link to="/">Contact</Link>
        <Link to="/" className={styles.cta}>Buy Now</Link>
        <button className={styles.close} onClick={toggleMenu}><FaTimes /></button>
      </nav>

      <button className={styles.menuBtn} onClick={toggleMenu}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
