export const NotScoredPage: React.FC = ({ game }) => {
  console.log(game);
  return (
    <img className="mask mask-square " src={game.background_image} />
  );
};
