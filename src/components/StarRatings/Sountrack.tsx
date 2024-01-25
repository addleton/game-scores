export const Soundtrack: React.FC = ({ soundScore, setSoundScore }) => {
  return (
    <div className="rating rating-md">
      <input
        type="radio"
        name="rating-3"
        className="rating-hidden"
        value={0}
        onClick={(e) => {
          setSoundScore(e.target.value);
        }}
        checked={soundScore === 0}
      />
      <input
        type="radio"
        name="rating-3"
        className="mask mask-star-2 bg-orange-400"
        value={1}
        onClick={(e) => {
          setSoundScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-3"
        className="mask mask-star-2 bg-orange-400"
        value={2}
        onClick={(e) => {
          setSoundScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-3"
        className="mask mask-star-2 bg-orange-400"
        value={3}
        onClick={(e) => {
          setSoundScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-3"
        className="mask mask-star-2 bg-orange-400"
        value={4}
        onClick={(e) => {
          setSoundScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-3"
        className="mask mask-star-2 bg-orange-400"
        value={5}
        onClick={(e) => {
          setSoundScore(e.target.value);
        }}
      />
    </div>
  );
};
