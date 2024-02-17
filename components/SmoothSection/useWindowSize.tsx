"use client";
import { useState, useEffect } from "react";

export default function useWindowSize() {
  const isClient = typeof window === "object";

  const getSize = () => {
    if (!isClient) {
      return {
        width: undefined,
        height: undefined,
      };
    }

    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  return windowSize;
}
