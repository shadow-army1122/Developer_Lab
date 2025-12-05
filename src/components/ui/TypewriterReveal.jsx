import React, { useEffect, useState } from "react";

const TypewriterReveal = ({ text, active, index = 0, speed = 35 }) => {
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (!active) {
      setOutput("");
      return;
    }

    // Start typing after delay based on index (staggered)
    const startDelay = index * 150; 
    let timeout = setTimeout(() => {
      let i = 0;

      const interval = setInterval(() => {
        setOutput((prev) => text.slice(0, i + 1));
        i++;

        if (i === text.length) {
          clearInterval(interval);
        }
      }, speed);

    }, startDelay);

    return () => clearTimeout(timeout);
  }, [active, index, text, speed]);

  return (
    <span className="font-semibold text-[18px] tracking-tight">
      {output}
    </span>
  );
};

export default TypewriterReveal;
