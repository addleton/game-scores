import totalScore from "../utils/utils";
import Game from "../types/Types";
import { Card, Rate } from "antd";

const { Meta } = Card;

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
        <Meta
          title={game.title}
          avatar={score}
          description={<Rate disabled allowHalf defaultValue={score} />}
        />
      </Card>
    </>
  );
};

export default GameCard;
