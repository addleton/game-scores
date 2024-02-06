import { Rating } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { useNavigate } from "react-router-dom";

const MobileRecommendedCard: React.FC = ({ game }) => {
  const navigate = useNavigate();
  const handleCardClick = async () => {
    navigate(`/games/${game.id}`);
  };

  return (
    <div
      className="card max-w-screen max-h-64 min-h-64 image-full border-b border-t"
      onClick={handleCardClick}
    >
      <figure>
        <img className="card-image min-w-screen max-w-screen" src={game.img} alt="Shoes" />
      </figure>
      <div className="card-body w-screen max-w-screen">
        <p>{""}</p>
        <div className="justify-center align-center items-center w-full max-w-screen">
          <Rating
            name="read-only"
            value={game.avg_final_score}
            precision={0.1}
            readOnly
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
  );
};

export default MobileRecommendedCard;
