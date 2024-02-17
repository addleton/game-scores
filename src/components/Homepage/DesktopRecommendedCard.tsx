import { Rating } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { useNavigate } from "react-router-dom";
import { HomepageGameCardProps } from "../../types/Types";

const DesktopRecommendedCard: React.FC<HomepageGameCardProps> = ({ game }) => {
    const navigate = useNavigate();
    const handleCardClick = async () => {
        navigate(`/games/${game.id}`);
    };
    return (
        <div
            className="card max-w-full h-40  image-full hover:scale-110 transition-transform border border-secondary"
            onClick={handleCardClick}
        >
            <figure>
                <img
                    className="card-image max-w-64"
                    src={game.img}
                    alt="Shoes"
                />
            </figure>
            <div className="card-body w-64">
                <p>{""}</p>
                <div className="card-actions justify-center ">
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

export default DesktopRecommendedCard;
