import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../firebaseConfig";
import GameCard from "./GameCard";
import Game from "../types/Types";

const Games: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);

  const getGames = async () => {
    try {
      const querySnapshot = await getDocs(
        query(collection(db, "games"), orderBy("enjoyment", "desc"))
      );
      const data: Game[] = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() } as Game;
      });
      setGames(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <>
      <h2 id="games-title">Games</h2>
      <div id="center-games-container">
        <div id="games-container">
          {games.map((game) => {
            return <GameCard game={game} key={game.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Games;
