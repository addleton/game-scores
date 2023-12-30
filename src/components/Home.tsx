import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../firebaseConfig";
import { useEffect, useState } from "react";
import Game from "../types/Types";
import GameCard from "./GameCard";
import { getRandomGames } from "../utils/utils";

const Home = () => {
  const [randomGames, setRandomGames] = useState<Game[]>([]);

  const getRecommendedGames = async () => {
    const querySnapshot = await getDocs(
      query(collection(db, "games"), where("must_play", "==", true))
    );
    const data: Game[] = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() } as Game;
    });
    setRandomGames(getRandomGames(data));
  };

  useEffect(() => {
    getRecommendedGames();
  }, []);

  return (
    <>
      <h2>Home</h2>
      {randomGames.map((game) => {
        return <GameCard game={game} key={game.id} />;
      })}
    </>
  );
};

export default Home;
