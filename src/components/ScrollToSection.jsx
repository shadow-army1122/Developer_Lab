import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const target = params.get("scroll");

    if (target) {
      const el = document.getElementById(target);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, [location.search]);

  return null;
}
