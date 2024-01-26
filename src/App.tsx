import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Games from "./components/Games";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";
import { UserProvider } from "./context/UserContext";
import { GameSearch } from "./components/GameSearch";
import { NotScoredPage } from "./components/NotScoredPage";
import { GameScorePage } from "./components/GameScorePage";
import { useEffect, useState } from "react";
import { AddScorePage } from "./components/AddScorePage";

function App() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedGameId, setSelectedGameId] = useState(null);

  useEffect(() => {
    if (selectedGame !== null) {
      setSelectedGameId(selectedGame.id);
    }
  }, [selectedGame]);

  return (
    <>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/games" element={<Games />} />
          <Route
            path="/game-search"
            element={
              <GameSearch
                setSelectedGame={setSelectedGame}
                selectedGame={selectedGame}
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
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
