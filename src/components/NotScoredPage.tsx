import { useContext, useState } from "react";
import { ArtDirection } from "./StarRatings/ArtDirection";
import { Enjoyment } from "./StarRatings/Enjoyment";
import { Gameplay } from "./StarRatings/Gameplay";
import { Narrative } from "./StarRatings/Narrative";
import { Soundtrack } from "./StarRatings/Sountrack";
import { UserContext } from "../context/UserContext";
import { addGame } from "../utils/gamesApi";
import { Link, useNavigate } from "react-router-dom";

export const NotScoredPage: React.FC = ({ game }) => {
  const [gameplayScore, setGameplayScore] = useState(0);
  const [narrativeScore, setNarrativeScore] = useState(0);
  const [soundScore, setSoundScore] = useState(0);
  const [artScore, setArtScore] = useState(0);
  const [enjoymentScore, setEnjoymentScore] = useState(0);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleAddGame = async () => {
    if (
      gameplayScore &&
      narrativeScore &&
      soundScore &&
      artScore &&
      enjoymentScore
    ) {
      const res = await addGame(
        game,
        user.uid,
        Number(gameplayScore),
        Number(narrativeScore),
        Number(soundScore),
        Number(artScore),
        Number(enjoymentScore)
      );
      if (res) {
        navigate(`/games/${game.id}`);
      }
    }
  };

  return (
    <>
      {user ? (
        <div className="hero min-h-screen bg-base-100">
          <div className="hero-content flex-col lg:flex-row box-content bg-base-200 shadow-xl rounded-lg p-20">
            <img
              src={game.background_image}
              className="max-w-2xl rounded-lg shadow-2xl mr-12 flex-shrink-0"
            />
            <div className="divider lg:divider-horizontal" />
            <div className="container ml-12 flex flex-col self-start flex-grow">
              <h2 className="text-4xl mb-6 font-bold">{game.name}</h2>
              <h3 className="text-xl font-bold">Gameplay</h3>
              <div>
                <Gameplay
                  gameplayScore={gameplayScore}
                  setGameplayScore={setGameplayScore}
                />
              </div>
              <h3 className="text-xl font-bold">Narrative</h3>
              <div>
                <Narrative
                  narrativeScore={narrativeScore}
                  setNarrativeScore={setNarrativeScore}
                />
              </div>
              <h3 className="text-xl font-bold">Soundtrack / Score</h3>
              <div>
                <Soundtrack
                  soundScore={soundScore}
                  setSoundScore={setSoundScore}
                />
              </div>
              <h3 className="text-xl font-bold">Art Direction</h3>
              <div>
                <ArtDirection artScore={artScore} setArtScore={setArtScore} />
              </div>
              <h3 className="text-xl font-bold">Personal Enjoyment</h3>
              <Enjoyment
                enjoymentScore={enjoymentScore}
                setEnjoymentScore={setEnjoymentScore}
              />
              <button className="btn mt-12" onClick={handleAddGame}>
                Submit
              </button>
            </div>
          </div>
        </div>
      ) : !user ? (
        <Link to="/login">
          <p>login</p>
        </Link>
      ) : (
        <p>select a game first</p>
      )}
    </>
  );
};
