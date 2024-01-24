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
import { useState } from "react";

function App() {
  const [selectedGame, setSelectedGame] = useState(null);
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
            element={<GameScorePage game={selectedGame} />}
          />
          <Route
            path="/games/score-game"
            element={<NotScoredPage game={selectedGame} />}
          />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
