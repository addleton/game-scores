import { useNavigate, useParams } from "react-router-dom";
import { checkUserScored, getGameFromFirestore } from "../../utils/gamesApi";
import { useEffect, useState } from "react";
import { useUserContext } from "../../context/UserContext";
import { Rating } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { resizeFunction } from "../../utils/utils";
import { FirebaseGame } from "../../types/Types";

export const GameScorePage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [game, setGame] = useState<FirebaseGame | null | undefined>(null);
  const [hasScored, setHasScored] = useState<boolean>(false);
  const { user } = useUserContext();
  const { id } = useParams<string>();
  const [screenSize, setScreenSize] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleAddScore = () => {
    navigate(`add-score`);
  };
  useEffect(() => {
    const fetchGame = async () => {
      try {
        if (id) {
          const gameData = await getGameFromFirestore(id);
          if (user) {
            const res = (await checkUserScored(user.uid, id)) as boolean;
            setHasScored(res);
          }
          setGame(gameData);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching game data:", error);
      }
    };
    console.log(game);
    fetchGame();
  }, [id]);

  useEffect(() => {
    const resize = resizeFunction(setScreenSize);
    return () => {
      resize();
    };
  }, []);

  if (loading || !screenSize) {
    return (
      <div className="hero min-h-screen">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  } else if (screenSize === "desktop" && game) {
    return (
      <div className="hero min-h-screen min-w-screen bg-base-100 flex content-center justify-evenly">
        <div className="hero-content flex-col box-content bg-base-100 shadow-xl rounded-lg min-w-96">
          <h1 className="text-6xl font-bold">{game.name}</h1>
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
              className="max-w-4xl rounded-lg shadow-2xl ml-20 justify"
            />
            <div className="divider lg:divider-horizontal" />
            <div className="container flex-col max-w-36">
              <h3 className="text-xl font-bold ">Genre(s)</h3>

              <div className="flex-col mb-4">
                {game.genres
                  ? game.genres.map((genre) => {
                      return (
                        <h3 key={genre.name} className="text-sm font-bold">
                          {genre.name}
                        </h3>
                      );
                    })
                  : null}
              </div>
              <h3 className="text-xl font-bold ">Platform(s)</h3>

              <div className="flex-col mb-4">
                {game.platforms
                  ? game.platforms.map((platform) => {
                      return (
                        <h3
                          key={platform.platform.name}
                          className="text-sm font-bold"
                        >
                          {platform.platform.name}
                        </h3>
                      );
                    })
                  : null}
              </div>
              <h3 className="text-xl font-bold">Age Rating</h3>

              <div className="flex mb-4">
                <h3 className="text-sm font-bold">
                  {game.esrb_rating ? (
                    game.esrb_rating === null ? (
                      <p>Unknown</p>
                    ) : (
                      game.esrb_rating.name
                    )
                  ) : null}
                </h3>
              </div>
              <h3 className="text-xl font-bold">Developer(s)</h3>

              <div className="flex-col mb-4">
                {game.developers
                  ? game.developers.map((developer) => {
                      return (
                        <h3 key={developer.name} className="text-sm font-bold">
                          {developer.name}
                        </h3>
                      );
                    })
                  : null}
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
        <div className="stats text-lg font-bold p-0 m-0 max-w-48 flex-col min-h-screen content-center">
          <div className="flex-col max-w-48">
            <div className="stat">
              <div className="stat-title">Gameplay</div>
              <div className="stat-value">
                <Rating
                  name="read-only"
                  value={game.avg_gameplay}
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
            <div className="stat">
              <div className="stat-title">Narrative</div>
              <div className="stat-value">
                <Rating
                  name="read-only"
                  value={game.avg_narrative}
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
            <div className="stat">
              <div className="stat-title">Music</div>
              <div className="stat-value">
                <Rating
                  name="read-only"
                  value={game.avg_soundtrack}
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
            <div className="stat">
              <div className="stat-title">Art Direction</div>
              <div className="stat-value">
                <Rating
                  name="read-only"
                  value={game.avg_art_direction}
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
            <div className="stat mb-12">
              <div className="stat-title">Enjoyment</div>
              <div className="stat-value">
                <Rating
                  name="read-only"
                  value={game.avg_enjoyment}
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
            <div className="stat">
              <div className="stat-title">Final Score</div>
              <div className="stat-value">
                <Rating
                  name="read-only"
                  value={game.avg_final_score}
                  precision={0.1}
                  readOnly
                  size="large"
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
            <div className="min-w-full flex justify-center mb-12">
              <p className="text-8xl">{game.avg_final_score!.toFixed(1)}</p>
            </div>
            {hasScored ? null : (
              <div className="min-w-full flex justify-center">
                <button
                  onClick={() => {
                    handleAddScore();
                  }}
                  className="btn btn-outline"
                >
                  Score this game
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } else if (game) {
    return (
      <div className="hero flex-col content-center justify-evenly">
        <div className="hero-content flex-col box-content min-w-96 max-w-screen">
          <h1 className="text-2xl font-bold mt-10 mobile-game-score-text">
            {game.name}
          </h1>
          <div className="hero-content flex-col lg:flex-row">
            <img src={game.img} className=" mobile-game-score-image" />
            <div className="divider lg:divider-horizontal" />
            <div className="mobile-game-score-container">
              <p className="text-md font-bold mobile-game-score-text">
                {game.description}
              </p>
            </div>
          </div>{" "}
          <div className="divider"></div>
          <div className="hero-content flex-col  w-full ">
            <img src={game.alt_img} className="mobile-game-score-image " />
            <div className="divider lg:divider-horizontal" />
            <div className="flex-col mobile-game-score-text">
              <div className="flex justify-evenly max-w-screen">
                <div className="flex-col">
                  <h3 className="text-md font-bold ">Genre(s)</h3>
                  <div className="flex-col mb-4">
                    {game.genres
                      ? game.genres.map((genre) => {
                          return (
                            <h3 key={genre.name} className="text-sm font-bold">
                              {genre.name}
                            </h3>
                          );
                        })
                      : null}
                  </div>
                </div>
                <div className="divider"></div>
                <div className="flex-col">
                  <h3 className="text-md font-bold ">Platform(s)</h3>
                  <div className="flex-col mb-4">
                    {game.platforms
                      ? game.platforms.map((platform) => {
                          return (
                            <h3
                              key={platform.platform.name}
                              className="text-sm font-bold"
                            >
                              {platform.platform.name}
                            </h3>
                          );
                        })
                      : null}
                  </div>
                </div>
              </div>
              <div className="flex justify-evenly max-w-screen">
                <div className="flex-col">
                  <h3 className="text-md font-bold">Age Rating</h3>
                  <div className="flex mb-4">
                    <h3 className="text-sm font-bold w-full">
                      {game.esrb_rating ? (
                        game.esrb_rating === null ? (
                          <p>Unknown</p>
                        ) : (
                          game.esrb_rating.name
                        )
                      ) : null}
                    </h3>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="flex-col">
                  <h3 className="text-md font-bold">Developer(s)</h3>
                  <div className="flex-col mb-4">
                    {game.developers
                      ? game.developers.map((developer) => {
                          return (
                            <h3
                              key={developer.name}
                              className="text-sm font-bold"
                            >
                              {developer.name}
                            </h3>
                          );
                        })
                      : null}
                  </div>
                </div>
              </div>
              <div className="flex justify-evenly max-w-screen">
                <div className="flex-col">
                  <h3 className="text-md font-bold">Metacritic</h3>
                  <div className="flex mb-4">
                    <h3 className="text-sm font-bold w-full">
                      {game.metacritic}
                    </h3>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="flex-col">
                  <h3 className="text-md font-bold">Release Date</h3>

                  <div className="flex mb-4">
                    <h3 className="text-sm font-bold w-full">
                      {game.released}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divider lg:divider-horizontal" />
          <div className=" text-lg font-bold max-w-screen min-w-screen">
            <div className="flex-col min-w-screen ">
              <div className="mobile-stat-pairs">
                <div className="stat">
                  <div className="stat-title ">Gameplay</div>
                  <div className="stat-value">
                    <Rating
                      name="read-only"
                      value={game.avg_gameplay}
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
              <div className="mobile-stat-pairs">
                <div className="stat">
                  <div className="stat-title">Narrative</div>
                  <div className="stat-value">
                    <Rating
                      name="read-only"
                      value={game.avg_narrative}
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

                <div className="stat">
                  <div className="stat-title">Music</div>
                  <div className="stat-value">
                    <Rating
                      name="read-only"
                      value={game.avg_soundtrack}
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
              <div className="mobile-stat-pairs">
                <div className="stat">
                  <div className="stat-title">Art Direction</div>
                  <div className="stat-value">
                    <Rating
                      name="read-only"
                      value={game.avg_art_direction}
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

                <div className="stat">
                  <div className="stat-title">Enjoyment</div>
                  <div className="stat-value">
                    <Rating
                      name="read-only"
                      value={game.avg_enjoyment}
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
              <div className="mobile-stat-pairs">
                <div className="stat">
                  <div className="stat-title">Final Score</div>
                  <div className="stat-value">
                    <Rating
                      name="read-only"
                      value={game.avg_final_score}
                      precision={0.1}
                      readOnly
                      size="large"
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

              <div className="min-w-full flex justify-center">
                <p className="text-8xl">{game.avg_final_score!.toFixed(1)}</p>
              </div>
            </div>
          </div>
          {hasScored ? null : (
            <button
              onClick={() => {
                handleAddScore();
              }}
              className="btn btn-outline"
            >
              Add your own score
            </button>
          )}
        </div>
      </div>
    );
  }
};
