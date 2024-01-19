import { totalScore } from "../utils/utils";
import Game from "../types/Types";

const GameCard: React.FC<{ game: Game }> = ({ game }) => {
  const score = totalScore(game);
  return (<p>Gamecard</p>)
};

export default GameCard;
