export const Narrative: React.FC = ({ narrativeScore, setNarrativeScore }) => {

  return (
    <div className="rating rating-md">
      <input
        type="radio"
        name="rating-2"
        className="rating-hidden"
        value={0}
        onClick={(e) => {
          setNarrativeScore(e.target.value);
        }}
        checked={narrativeScore === 0}
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        value={1}
        onClick={(e) => {
          setNarrativeScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        value={2}
        onClick={(e) => {
          setNarrativeScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        value={3}
        onClick={(e) => {
          setNarrativeScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        value={4}
        onClick={(e) => {
          setNarrativeScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        value={5}
        onClick={(e) => {
          setNarrativeScore(e.target.value);
        }}
      />
    </div>
  );
};
