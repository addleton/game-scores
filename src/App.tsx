import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header_Footer/Header";
import Home from "./components/Homepage/Home";
import { Games } from "./components/AllGames/Games";
import { SignUp } from "./components/Login-Signup/SignUp";
import { Login } from "./components/Login-Signup/Login";
import { useUserContext } from "./context/UserContext";
import { GameSearch } from "./components/GameSearch/GameSearch";
import { NotScoredPage } from "./components/ScoreGames/NotScoredPage";
import { GameScorePage } from "./components/ScoreGames/GameScorePage";
import { useEffect, useState } from "react";
import { AddScorePage } from "./components/ScoreGames/AddScorePage";
import { onAuthStateChanged } from "firebase/auth";
import { getSignedInUserInfo } from "./utils/api";
import { auth } from "../firebaseConfig";
import { UserGames } from "./components/UserGames/UserGames";
import { Footer } from "./components/Header_Footer/Footer";
import { RawgGame } from "./types/Types";
function App() {
  const [selectedGame, setSelectedGame] = useState<RawgGame | null>(null);
  const [selectedGameId, setSelectedGameId] = useState<number | null>(null);
  const [homepageSearchInput, setHomepageSearchInput] = useState<string>("");
  const { setUser } = useUserContext();

  useEffect(() => {
    if (selectedGame !== null) {
      setSelectedGameId(selectedGame.id);
    }
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const loggedInUser = await getSignedInUserInfo(user.uid);
        await setUser(loggedInUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [selectedGame]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              homepageSearchInput={homepageSearchInput}
              setHomepageSearchInput={setHomepageSearchInput}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/games" element={<Games />} />
        <Route
          path="/game-search"
          element={
            <GameSearch
              setSelectedGame={setSelectedGame}
              selectedGame={selectedGame}
              homepageSearchInput={homepageSearchInput}
              setHomepageSearchInput={setHomepageSearchInput}
            />
          }
        />
        <Route
          path="/games/:id"
          element={<GameScorePage id={selectedGameId} />}
        />
        <Route
          path="/games/add-game"
          element={<NotScoredPage game={selectedGame} />}
        />
        <Route
          path="/games/:id/add-score"
          element={<AddScorePage game={selectedGame} />}
        />
        <Route path="/:username/games" element={<UserGames />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
