import { useState } from "react";
import { searchGames } from "../utils/gamesApi";
import GameCard from "./GameCard";

export const GameSearch: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const [games, setGames] = useState(undefined);

  const handleGameSearch = async (e) => {
    e.preventDefault();
    const data = await searchGames(searchInput);
    setGames(data);
  };
  return (
    <>
      <form onSubmit={handleGameSearch}>
        <div className="form-control">
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
        <button>Search</button>
      </form>
      <div className="grid grid-cols-3 gap-3">
        {games === undefined
          ? null
          : games.map((game) => {
              return <GameCard game={game} />;
            })}
      </div>
    </>
  );
};
