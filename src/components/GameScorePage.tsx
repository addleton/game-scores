import { Link, useParams } from "react-router-dom";
import { checkUserScored, getGameFromFirestore } from "../utils/gamesApi";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

export const GameScorePage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [game, setGame] = useState(null);
  const [hasScored, setHasScored] = useState(false);
  const { user } = useContext(UserContext);
  const { id } = useParams();
  useEffect(() => {
    const fetchGame = async () => {
      try {
        const gameData = await getGameFromFirestore(id);
        if (user) {
          const res = await checkUserScored(user.uid);
          setHasScored(res);
        }
        setGame(gameData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching game data:", error);
      }
    };

    fetchGame();
  }, [id]);

  if (loading) {
    return <h2>loading</h2>;
  } else {
    return (
      <div className="hero min-h-screen min-w-screen bg-base-100 flex content-center justify-evenly">
        <div className="hero-content flex-col box-content bg-base-100 shadow-xl rounded-lg min-w-96">
          <h1 className="text-4xl font-bold">{game.name}</h1>
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={game.img}
              className="max-w-2xl rounded-lg shadow-2xl flex-shrink-0"
            />
            <div className="divider lg:divider-horizontal" />
            <div className="container flex flex-col self-start flex-grow min-w-96">
              <p className="text-md font-bold">{game.description}</p>
            </div>
          </div>{" "}
          <div className="divider"></div>
          <div className="hero-content flex-col lg:flex-row-reverse w-full content-evenly justify-evenly">
            <img
              src={game.alt_img}
              className="max-w-2xl rounded-lg shadow-2xl w-full justify"
            />
            <div className="divider lg:divider-horizontal" />
            <div className="container flex-col max-w-36">
              <h3 className="text-xl font-bold ">Genre(s)</h3>

              <div className="flex-col mb-4">
                {game.genres.map((genre) => {
                  return <h3 className="text-sm font-bold">{genre.name}</h3>;
                })}
              </div>
              <h3 className="text-xl font-bold ">Platform(s)</h3>

              <div className="flex-col mb-4">
                {game.platforms.map((platform) => {
                  return (
                    <h3 className="text-sm font-bold">
                      {platform.platform.name}
                    </h3>
                  );
                })}
              </div>
              <h3 className="text-xl font-bold">Age Rating</h3>

              <div className="flex mb-4">
                <h3 className="text-sm font-bold">
                  {game.esrb_rating === null ? (
                    <p>Unknown</p>
                  ) : (
                    game.esrb_rating.name
                  )}
                </h3>
              </div>
              <h3 className="text-xl font-bold">Developer(s)</h3>

              <div className="flex-col mb-4">
                {game.developers.map((developer) => {
                  return (
                    <h3 className="text-sm font-bold">{developer.name}</h3>
                  );
                })}
              </div>
              <h3 className="text-xl font-bold">Metacritic Score</h3>

              <div className="flex mb-4">
                <h3 className="text-sm font-bold">{game.metacritic}</h3>
              </div>
              <h3 className="text-xl font-bold ">Release Date</h3>

              <div className="flex mb-4">
                <h3 className="text-sm font-bold">{game.released}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="divider lg:divider-horizontal" />

        <div className="flex-col ">
          <h3 className="text-xl font-bold">Gameplay</h3>

          <div className="flex mb-4">
            <div className="rating rating-md mr-2">
              <input
                type="radio"
                name="rating-8"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <h3 className="text-xl font-bold">{game.avg_gameplay}</h3>
          </div>
          <h3 className="text-xl font-bold">Narrative</h3>

          <div className="flex mb-4">
            <div className="rating rating-md mr-2">
              <input
                type="radio"
                name="rating-8"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <h3 className="text-xl font-bold">{game.avg_narrative}</h3>
          </div>
          <h3 className="text-xl font-bold ">Soundtrack / Score</h3>

          <div className="flex mb-4">
            <div className="rating rating-md mr-2">
              <input
                type="radio"
                name="rating-8"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <h3 className="text-xl font-bold">{game.avg_soundtrack}</h3>
          </div>
          <h3 className="text-xl font-bold">Art Direction</h3>

          <div className="flex mb-4">
            <div className="rating rating-md mr-2">
              <input
                type="radio"
                name="rating-8"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <h3 className="text-xl font-bold">{game.avg_art_direction}</h3>
          </div>
          <h3 className="text-xl font-bold ">Personal Enjoyment</h3>

          <div className="flex mb-4">
            <div className="rating rating-md mr-2">
              <input
                type="radio"
                name="rating-8"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <h3 className="text-xl font-bold">{game.avg_enjoyment}</h3>
          </div>
          <h3 className="text-4xl font-bold">Final Score</h3>

          <div className="flex mb-4">
            <div className="rating rating-lg mr-2">
              <input
                type="radio"
                name="rating-8"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <h3 className="text-4xl font-bold">{game.avg_final_score}</h3>
          </div>
          {hasScored ? null : (
            <Link to={"add-score"}>
              <button className="btn btn-outline">Add your score</button>
            </Link>
          )}
        </div>
      </div>
    );
  }
};
