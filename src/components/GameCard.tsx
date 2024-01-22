import { checkFirestoreGames } from "../utils/gamesApi";

const GameCard: React.FC = ({ game, setSelectedGame, setIsGameAdded }) => {
  const handleCardClick = async () => {
    const gameAdded = await checkFirestoreGames(game.id);
    setIsGameAdded(gameAdded);
    await setSelectedGame(game);
  };

  return (
    <div
      className="card w-full max-h-64 bg-base-100 shadow-xl image-full hover:scale-110 transition-transform"
      onClick={handleCardClick}
    >
      <figure>
        <img className="card-image" src={game.background_image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{game.name}</h2>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default GameCard;
