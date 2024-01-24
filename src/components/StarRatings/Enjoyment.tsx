import { useState } from "react";

export const Enjoyment: React.FC = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="rating rating-md">
      <input
        type="radio"
        name="rating-5"
        className="rating-hidden"
        value={0}
        onClick={(e) => {
          setRating(e.target.value);
        }}
        checked={rating === 0}
      />
      <input
        type="radio"
        name="rating-5"
        className="mask mask-star-2 bg-orange-400"
        value={1}
        onClick={(e) => {
          setRating(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-5"
        className="mask mask-star-2 bg-orange-400"
        value={2}
        onClick={(e) => {
          setRating(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-5"
        className="mask mask-star-2 bg-orange-400"
        value={3}
        onClick={(e) => {
          setRating(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-5"
        className="mask mask-star-2 bg-orange-400"
        value={4}
        onClick={(e) => {
          setRating(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-5"
        className="mask mask-star-2 bg-orange-400"
        value={5}
        onClick={(e) => {
          setRating(e.target.value);
        }}
      />
    </div>
  );
};
