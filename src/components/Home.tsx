import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../firebaseConfig";
import { useEffect, useState } from "react";
import Game from "../types/Types";
import GameCard from "./GameCard";
import { getRandomGames } from "../utils/utils";
import { Carousel } from "antd";

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

  const contentStyle: React.CSSProperties = {
    margin: 0,
    padding: 10,
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  console.log(randomGames);

  return (
    <>
      <h2>Home</h2>
      <Carousel>
        {randomGames.map((randomGame) => {
          return (
            <div>
              <h3 style={contentStyle}>
                {<GameCard game={randomGame} key={randomGame.id} />}
              </h3>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default Home;
