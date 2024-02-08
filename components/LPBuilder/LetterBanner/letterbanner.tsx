'use client'
import { useEffect, useRef } from "react";
import styles from "./letterbanner.module.css";

export const LetterBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPercentage = window.scrollY / (window.innerHeight);
        const newPosition = -100 + scrollPercentage * 100;

        containerRef.current.style.transform = `translateX(${newPosition}%)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.trackContainer}>
      <div ref={containerRef} className={styles.wordsWrapper}>
        <span>COMPROMISSO</span>
        <span>CRIATIVIDADE</span>
        <span>INOVAÇÃO</span>
        <span>EXCELÊNCIA</span>
        <span>OTIMIZAÇÃO</span>
      </div>
    </div>
  );
};
