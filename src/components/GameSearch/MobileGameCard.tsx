import { useNavigate } from "react-router-dom";
import { checkFirestoreGames, getSingleGame } from "../../utils/gamesApi";
import { GameCardProps } from "../../types/Types";

const MobileGameCard: React.FC<GameCardProps> = ({
  game,
  setSelectedGame,
  setIsGameAdded,
}) => {
  const navigate = useNavigate();
  const handleCardClick = async () => {
    const gameAdded = await checkFirestoreGames(game.id) as boolean;
    await setIsGameAdded(gameAdded);
    if (gameAdded) {
      navigate(`/games/${game.id}`);
    } else {
      const singleGame = await getSingleGame(game.id);

      await setSelectedGame(singleGame);
    }
  };

  return (
    <div
      className="card w-full max-h-64 min-h-64 min shadow-xl image-full border-t border-b border-secondary"
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

export default MobileGameCard;
