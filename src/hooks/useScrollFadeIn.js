import { useEffect, useState, useRef } from "react";

export const useScrollFadeIn = () => {

const ref = useRef(null);
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    },
     {threshold: 0.5}
  );

  if (ref.current) observer.observe(ref.current);

  return () => observer.disconnect();
}, []);

  return { ref, isVisible};
}

export default useScrollFadeIn