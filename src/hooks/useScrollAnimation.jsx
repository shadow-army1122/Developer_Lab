import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true, // Only animate once
    margin: "-10% 0px -10% 0px", // Trigger when element is 10% inside viewport
    ...options
  });

  return { ref, isInView };
};