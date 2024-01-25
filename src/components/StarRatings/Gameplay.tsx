export const Gameplay: React.FC = ({ gameplayScore, setGameplayScore }) => {
  return (
    <div className="rating rating-md">
      <input
        type="radio"
        name="rating-1"
        className="rating-hidden"
        value={0}
        onClick={(e) => {
          setGameplayScore(e.target.value);
        }}
        checked={gameplayScore === 0}
      />
      <input
        type="radio"
        name="rating-1"
        className="mask mask-star-2 bg-orange-400"
        value={1}
        onClick={(e) => {
          setGameplayScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-1"
        className="mask mask-star-2 bg-orange-400"
        value={2}
        onClick={(e) => {
          setGameplayScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-1"
        className="mask mask-star-2 bg-orange-400"
        value={3}
        onClick={(e) => {
          setGameplayScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-1"
        className="mask mask-star-2 bg-orange-400"
        value={4}
        onClick={(e) => {
          setGameplayScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-1"
        className="mask mask-star-2 bg-orange-400"
        value={5}
        onClick={(e) => {
          setGameplayScore(e.target.value);
        }}
      />
    </div>
  );
};
