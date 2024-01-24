import { useEffect, useState } from "react";
import { searchGames } from "../utils/gamesApi";
import GameCard from "./GameCard";
import { NotScoredPage } from "./NotScoredPage";
import { useNavigate } from "react-router-dom";

export const GameSearch: React.FC = ({ setSelectedGame, selectedGame }) => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [games, setGames] = useState(undefined);
  const [isGameAdded, setIsGameAdded] = useState(null);

  const handleGameSearch = async (e) => {
    e.preventDefault();
    setSelectedGame(null);
    const data = await searchGames(searchInput);
    setGames(data);
  };

  useEffect(() => {
    console.log(selectedGame)
    if (isGameAdded === true) {
      navigate(`/games/${selectedGame.id}`);
    } else if (isGameAdded === false) {
      navigate("/games/score-game");
    }
  }, [selectedGame]);

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
            className="input input-bordered w-24 md:w-auto"
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
      ) : selectedGame && !isGameAdded ? (
        <NotScoredPage game={selectedGame} />
      ) : selectedGame && isGameAdded ? (
        <p>reviews here</p>
      ) : null}
    </>
  );
};
