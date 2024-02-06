export const Narrative: React.FC = ({ narrativeScore, setNarrativeScore }) => {
  return (
    <div className="rating rating-lg rating-half">
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
        className="mask mask-star-2 bg-orange-400 mask-half-1"
        value={0.5}
        onClick={(e) => {
          setNarrativeScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400 mask-half-2"
        value={1}
        onClick={(e) => {
          setNarrativeScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400 mask-half-1"
        value={1.5}
        onClick={(e) => {
          setNarrativeScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400 mask-half-2"
        value={2}
        onClick={(e) => {
          setNarrativeScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400 mask-half-1"
        value={2.5}
        onClick={(e) => {
          setNarrativeScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400 mask-half-2"
        value={3}
        onClick={(e) => {
          setNarrativeScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400 mask-half-1"
        value={3.5}
        onClick={(e) => {
          setNarrativeScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400 mask-half-2"
        value={4}
        onClick={(e) => {
          setNarrativeScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400 mask-half-1"
        value={4.5}
        onClick={(e) => {
          setNarrativeScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400 mask-half-2"
        value={5}
        onClick={(e) => {
          setNarrativeScore(e.target.value);
        }}
      />
    </div>
  );
};
