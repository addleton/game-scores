import { useEffect, useState } from "react";
import { getAllFirestoreGames } from "../../utils/gamesApi";
import { Link } from "react-router-dom";
import { FirebaseGame } from "../../types/Types";

export const Games: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [games, setGames] = useState<FirebaseGame[]>([]);
  const [order, setOrder] = useState<string>("desc");
  const [sort, setSort] = useState<string>("avg_final_score");
  const [screenSize, setScreenSize] = useState<string>("desktop");

  useEffect(() => {
    const fetchGames = async () => {
      const data = await getAllFirestoreGames(sort, order);
      if (data !== undefined) {
        setGames(data);
        setIsLoading(false);
      }
    };

    fetchGames();
  }, [order, sort]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setScreenSize("mobile");
      } else {
        setScreenSize("desktop");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isLoading) {
    return <h2>Loading....</h2>;
  } else if (screenSize === "desktop") {
    return (
      <div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost m-1">
            {sort === "avg_final_score" ? (
              <p>Final Score</p>
            ) : sort === "name" ? (
              <p>Name</p>
            ) : sort === "avg_gameplay" ? (
              <p>Gameplay</p>
            ) : sort === "avg_narrative" ? (
              <p>Narrative</p>
            ) : sort === "avg_soundtrack" ? (
              <p>Music</p>
            ) : sort === "avg_art_direction" ? (
              <p>Art Direction</p>
            ) : sort === "avg_enjoyment" ? (
              <p>Release Date</p>
            ) : (
              <p>Release Date</p>
            )}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <p
                onClick={() => {
                  setSort("avg_final_score");
                }}
              >
                Final Score
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  setSort("avg_gameplay");
                }}
              >
                Gameplay
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  setSort("avg_narrative");
                }}
              >
                Narrative
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  setSort("avg_soundtrack");
                }}
              >
                Music
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  setSort("avg_art_direction");
                }}
              >
                Art Direction
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  setSort("avg_enjoyment");
                }}
              >
                Enjoyment
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  setSort("name");
                }}
              >
                Name
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  setSort("released");
                }}
              >
                Release Date
              </p>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost m-1">
            {order === "desc" ? <p>Descending</p> : <p>Ascending</p>}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <p
                onClick={() => {
                  setOrder("desc");
                }}
              >
                Descending
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  setOrder("asc");
                }}
              >
                Ascending
              </p>
            </li>
          </ul>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th className="game-table-header">Name</th>
                <th className="game-table-header">Final Score</th>
                <th className="game-table-header">Gameplay</th>
                <th className="game-table-header">Narrative</th>
                <th className="game-table-header">Music</th>
                <th className="game-table-header">Art Direction</th>
                <th className="game-table-header">Enjoyment</th>
                <th className="game-table-header">Release Date</th>
              </tr>
            </thead>
            <tbody>
              {games.map((game) => {
                return (
                  <tr key={game.id}>
                    <td>
                      <Link to={`/games/${game.id}`}>{game.name}</Link>
                    </td>
                    <th>{game.avg_final_score}</th>
                    <th>{game.avg_gameplay}</th>
                    <th>{game.avg_narrative}</th>
                    <th>{game.avg_soundtrack}</th>
                    <th>{game.avg_art_direction}</th>
                    <th>{game.avg_enjoyment}</th>
                    <td>{game.released}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost m-1">
            {sort === "avg_final_score" ? (
              <p>Final Score</p>
            ) : sort === "name" ? (
              <p>Name</p>
            ) : (
              <p>Release Date</p>
            )}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <p
                onClick={() => {
                  setSort("avg_final_score");
                }}
              >
                Final Score
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  setSort("name");
                }}
              >
                Name
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  setSort("released");
                }}
              >
                Release Date
              </p>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost m-1">
            {order === "desc" ? <p>Descending</p> : <p>Ascending</p>}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <p
                onClick={() => {
                  setOrder("desc");
                }}
              >
                Descending
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  setOrder("asc");
                }}
              >
                Ascending
              </p>
            </li>
          </ul>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th className="game-table-header">Name</th>
                <th className="game-table-header">Final Score</th>
                <th className="game-table-header">Release Date</th>
              </tr>
            </thead>
            <tbody>
              {games.map((game) => {
                return (
                  <tr key={game.id}>
                    <td>
                      <Link to={`/games/${game.id}`}>{game.name}</Link>
                    </td>
                    <th>{game.avg_final_score}</th>
                    <td>{game.released}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </div>
    );
  }
};
