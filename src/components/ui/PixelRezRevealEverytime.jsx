import React, { useEffect, useState } from "react";
import { PixelRezReveal } from "./PixelRezReveal";

const PixelRezRevealEverytime = ({ active, children }) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (active) {
      setKey((prev) => prev + 1); // re-trigger animation
    }
  }, [active]);

  return <PixelRezReveal key={key}>{children}</PixelRezReveal>;
};

export default PixelRezRevealEverytime;
