const CartIcon = ({totalQuantity }) => {
  return (
    <div className="relative">
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
      <span className="absolute -top-2 -right-2 bg-yellow-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">{totalQuantity}</span>
    </div>
  );
};

export default CartIcon;
