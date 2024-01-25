export const Enjoyment: React.FC = ({ enjoymentScore, setEnjoymentScore }) => {
  return (
    <div className="rating rating-md">
      <input
        type="radio"
        name="rating-5"
        className="rating-hidden"
        value={0}
        onClick={(e) => {
          setEnjoymentScore(e.target.value);
        }}
        checked={enjoymentScore === 0}
      />
      <input
        type="radio"
        name="rating-5"
        className="mask mask-star-2 bg-orange-400"
        value={1}
        onClick={(e) => {
          setEnjoymentScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-5"
        className="mask mask-star-2 bg-orange-400"
        value={2}
        onClick={(e) => {
          setEnjoymentScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-5"
        className="mask mask-star-2 bg-orange-400"
        value={3}
        onClick={(e) => {
          setEnjoymentScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-5"
        className="mask mask-star-2 bg-orange-400"
        value={4}
        onClick={(e) => {
          setEnjoymentScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-5"
        className="mask mask-star-2 bg-orange-400"
        value={5}
        onClick={(e) => {
          setEnjoymentScore(e.target.value);
        }}
      />
    </div>
  );
};
