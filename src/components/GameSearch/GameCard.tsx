import { useNavigate } from "react-router-dom";
import { checkFirestoreGames, getSingleGame } from "../../utils/gamesApi";
import { GameCardProps } from "../../types/Types";

const GameCard: React.FC<GameCardProps> = ({
  game,
  setSelectedGame,
  setIsGameAdded,
}) => {
  const navigate = useNavigate();
  const handleCardClick = async () => {
    const gameAdded = await checkFirestoreGames(game.id) as boolean;
    setIsGameAdded(gameAdded);
    if (gameAdded) {
      navigate(`/games/${game.id}`);
    } else {
      const singleGame = await getSingleGame(game.id);
      console.log(singleGame);
      setSelectedGame(singleGame);
    }
  };

  return (
    <div
      className="card w-full max-h-64 bg-base-100 shadow-xl image-full hover:scale-110 transition-transform border border-secondary"
      onClick={handleCardClick}
    >
      <figure>
        <img
          className="card-image"
          src={game.background_image}
          alt={`Cover art for the video game ${game.name}`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{game.name}</h2>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default GameCard;
