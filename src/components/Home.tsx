import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from "../../firebaseConfig";
import { useEffect, useState } from "react";
import Game from "../types/Types";

import { getRandomGames } from "../utils/utils";

import MustPlayCarousel from "./MustPlayCarousel";
import { Link } from "react-router-dom";

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
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src="/mario-luigi.png" className="max-w-sm" />
        <div>
          <h1 className="text-5xl font-bold">Welcome to myGameScores</h1>
          <p className="py-6">
Step into a community-driven platform where
            your opinions matter. Whether you're a casual player or a hardcore
            enthusiast, this is your space to rate and review the games you've
            played.
          </p>
          <Link to='/login'><button className="btn btn-primary">Log In</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
