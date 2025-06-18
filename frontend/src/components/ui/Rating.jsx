import React from "react";
import { Star } from "lucide-react";

const Rating = ({ rating = 0 }) => {
  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < Math.floor(rating) ? "#facc15" : "none"}
        />
      ))}
      <span className="text-sm text-gray-600">({rating.toFixed(1)})</span>
    </div>
  );
};

export default Rating;