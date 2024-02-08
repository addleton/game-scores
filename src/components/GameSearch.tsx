import { useEffect, useState } from "react";
import { searchGames } from "../utils/gamesApi";
import GameCard from "./GameCard";
import { useNavigate } from "react-router-dom";
import { resizeFunction } from "../utils/utils";
import MobileGameCard from "./MobileGameCard";

export const GameSearch: React.FC = ({
  setSelectedGame,
  selectedGame,
  homepageSearchInput,
}) => {
  const navigate = useNavigate();
  const [games, setGames] = useState(undefined);
  const [isGameAdded, setIsGameAdded] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [screenSize, setScreenSize] = useState(null);

  const handleGameSearch = async (e) => {
    e.preventDefault();
    setSelectedGame(null);
    const data = await searchGames(searchInput);
    setGames(data);
  };

  useEffect(() => {
    const functionFromHomepage = async () => {
      setSearchInput(homepageSearchInput);
      const data = await searchGames(homepageSearchInput);
      setGames(data);
    };

    if (homepageSearchInput) {
      functionFromHomepage();
    }

    if (isGameAdded === true) {
      navigate(`/games/${selectedGame.id}`);
    } else if (isGameAdded === false) {
      navigate("/games/add-game");
    }
  }, [selectedGame, homepageSearchInput]);

  useEffect(() => {
    const resize = resizeFunction(setScreenSize);
    return () => {
      resize();
    };
  }, []);

  if (!screenSize) {
    return (
      <div className="hero min-h-screen">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  } else if (screenSize === "desktop") {
    return (
      <>
        <form
          onSubmit={handleGameSearch}
          className="container mx-auto flex items-center justify-center mt-16 mb-8"
        >
          <div className="form-control w-3/6">
            <input
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              className="input input-bordered input-secondary w-24 md:w-auto "
            />
          </div>
        </form>
        {!selectedGame ? (
          <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-10">
              {games === undefined
                ? null
                : games.map((game) => {
                    return (
                      <GameCard
                        game={game}
                        key={game.id}
                        setSelectedGame={setSelectedGame}
                        setIsGameAdded={setIsGameAdded}
                      />
                    );
                  })}
            </div>
          </div>
        ) : selectedGame && isGameAdded ? (
          <p>reviews here</p>
        ) : null}
      </>
    );
  } else {
    return (
      <>
        <form
          onSubmit={handleGameSearch}
          className="container mx-auto flex items-center justify-center mt-16 mb-8"
        >
          <div className="form-control w-3/6">
            <input
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              className="input input-bordered input-secondary md:w-auto "
            />
          </div>
        </form>
        {!selectedGame ? (
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-5">
              {games === undefined
                ? null
                : games.map((game) => {
                    return (
                      <MobileGameCard
                        game={game}
                        key={game.id}
                        setSelectedGame={setSelectedGame}
                        setIsGameAdded={setIsGameAdded}
                      />
                    );
                  })}
            </div>
          </div>
        ) : selectedGame && isGameAdded ? (
          <p>reviews here</p>
        ) : null}
      </>
    );
  }
};
