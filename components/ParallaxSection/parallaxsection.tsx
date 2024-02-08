"use client";
// components/ParallaxSection/ParallaxSection.js
import React, { useState, useEffect, useRef } from "react";
import styles from "./parallaxsection.module.css";

interface HTMLElement {
  offsetTop: number;
}

const ParallaxSection = ({ id, dark, children }: any) => {
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const section = sectionRef.current;

      if (section) {
        const threshold = (section as HTMLElement).offsetTop;
        setIsSticky(scrollY > threshold);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`${styles.parallaxSection} ${dark && styles.dark} ${
        isSticky && styles.sticky
      }`}
    >
      {children}
    </section>
  );
};

export default ParallaxSection;
