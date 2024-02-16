import { GameplayRatingProps } from "../../../types/Types";

export const Gameplay: React.FC<GameplayRatingProps> = ({
  gameplayScore,
  setGameplayScore,
}) => {
  return (
    <div className="rating rating-lg rating-half">
      <input
        type="radio"
        name="rating-1"
        className="rating-hidden"
        value={0}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setGameplayScore(e.target.value);
        }}
        checked={gameplayScore === "0"}
      />
      <input
        type="radio"
        name="rating-1"
        className="mask mask-star-2 bg-orange-400 mask-half-1"
        value={0.5}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setGameplayScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-1"
        className="mask mask-star-2 bg-orange-400 mask-half-2"
        value={1}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setGameplayScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-1"
        className="mask mask-star-2 bg-orange-400 mask-half-1"
        value={1.5}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setGameplayScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-1"
        className="mask mask-star-2 bg-orange-400 mask-half-2"
        value={2}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setGameplayScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-1"
        className="mask mask-star-2 bg-orange-400 mask-half-1"
        value={2.5}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setGameplayScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-1"
        className="mask mask-star-2 bg-orange-400 mask-half-2"
        value={3}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setGameplayScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-1"
        className="mask mask-star-2 bg-orange-400 mask-half-1"
        value={3.5}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setGameplayScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-1"
        className="mask mask-star-2 bg-orange-400 mask-half-2"
        value={4}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setGameplayScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-1"
        className="mask mask-star-2 bg-orange-400 mask-half-1"
        value={4.5}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setGameplayScore(e.target.value);
        }}
      />
      <input
        type="radio"
        name="rating-1"
        className="mask mask-star-2 bg-orange-400 mask-half-2"
        value={5}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setGameplayScore(e.target.value);
        }}
      />
    </div>
  );
};
