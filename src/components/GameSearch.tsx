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
      <form onSubmit={handleGameSearch} className="container mx-auto flex items-center justify-center mt-16 mb-8">
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

      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-10">
          {games === undefined
            ? null
            : games.map((game) => {
                return <GameCard game={game} />;
              })}
        </div>
      </div>
    </>
  );
};
