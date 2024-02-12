import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Games } from "./components/Games";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";
import { UserContext } from "./context/UserContext";
import { GameSearch } from "./components/GameSearch";
import { NotScoredPage } from "./components/NotScoredPage";
import { GameScorePage } from "./components/GameScorePage";
import { useContext, useEffect, useState } from "react";
import { AddScorePage } from "./components/AddScorePage";
import { UserProfile } from "./components/UserProfile";
import { onAuthStateChanged } from "firebase/auth";
import { getSignedInUserInfo } from "./utils/gamesApi";
import { auth } from "../firebaseConfig";
import { UserGames } from "./components/UserGames";
function App() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedGameId, setSelectedGameId] = useState(null);
  const [homepageSearchInput, setHomepageSearchInput] = useState("");
  const { setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(false);
    return () => unsubscribe();
  }, [selectedGame]);
  if (isLoading) {
    return null;
  } else {
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
                setSelectedGame={setSelectedGame}
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
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </>
    );
  }
}

export default App;
