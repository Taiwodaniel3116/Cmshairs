import { useEffect, useRef, useState } from "react";

export default function useScrollSlideIn(direction = "left") {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const hiddenStyle =
    direction === "left"
      ? "opacity-0 -translate-x-16"
      : "opacity-0 translate-x-16";

  const visibleStyle = "opacity-100 translate-x-0";

  return {
    ref,
    className: `transition-all duration-700 ease-out ${
      isVisible ? visibleStyle : hiddenStyle
    }`,
  };
}
