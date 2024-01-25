export const ArtDirection: React.FC = ({ artScore, setArtScore }) => {
  return (
    <div className="rating rating-md">
      <input
        type="radio"
        name="rating-4"
        className="rating-hidden"
        value={0}
        onClick={(e) => {
          setArtScore(e.target.value);
        }}
        checked={artScore === 0}
      />
      <input
        type="radio"
        name="rating-4"
        className="mask mask-star-2 bg-orange-400"
        value={1}
        onClick={(e) => {
          setArtScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-4"
        className="mask mask-star-2 bg-orange-400"
        value={2}
        onClick={(e) => {
          setArtScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-4"
        className="mask mask-star-2 bg-orange-400"
        value={3}
        onClick={(e) => {
          setArtScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-4"
        className="mask mask-star-2 bg-orange-400"
        value={4}
        onClick={(e) => {
          setArtScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-4"
        className="mask mask-star-2 bg-orange-400"
        value={5}
        onClick={(e) => {
          setArtScore(e.target.value);
        }}
      />
    </div>
  );
};