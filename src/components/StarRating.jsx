import Star from "./Star";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-1 pl-3">
      {[...Array(5)].map((_, index) => {
        if (index < fullStars) return <Star key={index} type="full" />;
        if (index === fullStars && hasHalfStar)
          return <Star key={index} type="half" />;
        return <Star key={index} type="empty" />;
      })}

      {/* <span className="ml-1 text-xs text-gray-500">
        ({rating})
      </span> */}
    </div>
  );
};

export default StarRating;
