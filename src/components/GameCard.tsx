import totalScore from "../utils/utils";
import Game from "../types/Types";
import { Card } from "antd";
import Rating from "@mui/material/Rating";

const GameCard: React.FC<{ game: Game }> = ({ game }) => {
  const score = totalScore(game);
  return (
    <>
      <Card
        className="game-card"
        hoverable
        style={{ width: 300 }}
        cover={<img src={game.img_url} />}
      >
        <section className="game-card-bottom">
          <div className="game-card-title">{game.title}</div>
          <Rating
            id="game-card-rating"
            value={score}
            precision={0.1}
            size="large"
            readOnly
          />
          <div className="game-card-score">{score}</div>
        </section>
      </Card>
    </>
  );
};

export default GameCard;
