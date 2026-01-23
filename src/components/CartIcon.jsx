import { useRef, useEffect, useState } from "react";

const CartIcon = ({ totalQuantity }) => {
  const prevCount = useRef(totalQuantity);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (totalQuantity > prevCount.current) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 300);
    }
    prevCount.current = totalQuantity;
  }, [totalQuantity]);

  return (
    <div className="relative">
      {/* Cart Icon */}
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h13M7 13h10M9 21h.01M15 21h.01"
        />
      </svg>

      {/* Badge */}
      <span
        className={`absolute -top-2 -right-2 
          bg-white text-xs font-semibold text-green-500
          rounded-full w-4 h-4
          flex items-center justify-center
          transition-transform duration-300
  ${animate ? "animate-badge" : ""}
`}
      >
        {totalQuantity}
      </span>
    </div>
  );
};

export default CartIcon;

// Scaling animation
//${animate ? "scale-125" : "scale-100"}
//Bouncing animation
//${animate ? "animate-badge" : ""}
