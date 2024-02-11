import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserGameCard: React.FC = ({ game }) => {
  const navigate = useNavigate();
  const handleCardClick = async () => {
    navigate(`/games/${game.game_id}`);
  };
  return (
    <div
      className="card lg:card-side shadow-xl user-game-card hover:scale-110 transition-transform"
      onClick={handleCardClick}
    >
      <figure>
        <img
          className="user-card-image"
          src={game.background_image}
          alt={`Cover art for the video game ${game.name}`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title self-center user-card-title">{game.name}</h2>
        <div className="user-card-pairs">
          <div className="user-card-rating">
            <p>Gameplay</p>
            <Rating
              name="read-only"
              value={game.gameplay}
              precision={0.1}
              readOnly
              size="small"
              id="Rating"
              emptyIcon={
                <StarBorderOutlinedIcon
                  style={{ color: "grey" }}
                  fontSize="inherit"
                />
              }
            />
          </div>
          <div className="user-card-rating">
            <p>Narrative</p>
            <Rating
              name="read-only"
              value={game.narrative}
              precision={0.1}
              readOnly
              size="small"
              id="Rating"
              emptyIcon={
                <StarBorderOutlinedIcon
                  style={{ color: "grey" }}
                  fontSize="inherit"
                />
              }
            />
          </div>
        </div>
        <div className="user-card-pairs">
          <div className="user-card-rating">
            <p>Music</p>
            <Rating
              name="read-only"
              value={game.soundtrack}
              precision={0.1}
              readOnly
              size="small"
              id="Rating"
              emptyIcon={
                <StarBorderOutlinedIcon
                  style={{ color: "grey" }}
                  fontSize="inherit"
                />
              }
            />
          </div>
          <div className="user-card-rating">
            <p>Art Direction</p>
            <Rating
              name="read-only"
              value={game.art_direction}
              precision={0.1}
              readOnly
              size="small"
              id="Rating"
              emptyIcon={
                <StarBorderOutlinedIcon
                  style={{ color: "grey" }}
                  fontSize="inherit"
                />
              }
            />
          </div>
        </div>
        <div className="user-card-pairs">
          <div className="user-card-rating">
            <p>Enjoyment</p>
            <Rating
              name="read-only"
              value={game.enjoyment}
              precision={0.1}
              readOnly
              size="small"
              id="Rating"
              emptyIcon={
                <StarBorderOutlinedIcon
                  style={{ color: "grey" }}
                  fontSize="inherit"
                />
              }
            />
          </div>
          <div className="user-card-rating">
            <p>Final Score</p>
            <Rating
              name="read-only"
              value={game.final_score}
              precision={0.1}
              readOnly
              size="small"
              id="Rating"
              emptyIcon={
                <StarBorderOutlinedIcon
                  style={{ color: "grey" }}
                  fontSize="inherit"
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserGameCard;
