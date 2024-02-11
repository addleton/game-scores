import { useEffect, useState } from "react";
import { getUserGames } from "../utils/gamesApi";
import { useParams } from "react-router-dom";
import UserGameCard from "./UserGameCard";
import { resizeFunction } from "../utils/utils";
import MobileUserGameCard from "./MobileUserGameCard";

export const UserGames: React.FC = () => {
  const [userGames, setUserGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [screenSize, setScreenSize] = useState("desktop");

  const { username } = useParams();

  const retrieveUserGames = async () => {
    const data = await getUserGames(username);
    setUserGames(data);
    setIsLoading(false);
  };

  useEffect(() => {
    retrieveUserGames();
  }, [username]);

  useEffect(() => {
    const resize = resizeFunction(setScreenSize);
    return () => {
      resize();
    };
  }, []);

  if (isLoading) {
    return (
      <div className="hero min-h-screen">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  } else if (screenSize === "mobile") {
    return (
      <div className="user-game-card-container">
        {userGames.map((userGame) => {
          return <UserGameCard key={userGame.id} game={userGame} />;
        })}
      </div>
    );
  } else {
    return (
      <div className="container mx-auto user-game-card-container">
        <div className="grid grid-cols-2 gap-10">
          {userGames === undefined
            ? null
            : userGames.map((game) => {
                return <MobileUserGameCard game={game} key={game.id} />;
              })}
        </div>
      </div>
    );
  }
};
