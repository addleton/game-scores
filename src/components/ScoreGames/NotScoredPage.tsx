import { useEffect, useState } from "react";
import { ArtDirection } from "./StarRatings/ArtDirection";
import { Enjoyment } from "./StarRatings/Enjoyment";
import { Gameplay } from "./StarRatings/Gameplay";
import { Narrative } from "./StarRatings/Narrative";
import { Soundtrack } from "./StarRatings/Sountrack";
import { useUserContext } from "../../context/UserContext";
import { addGame } from "../../utils/api";
import { Link, useNavigate } from "react-router-dom";
import { resizeFunction } from "../../utils/utils";
import { NotScoredProps, RawgGame } from "../../types/Types";

export const NotScoredPage: React.FC<NotScoredProps> = ({ game }) => {
    const [gameplayScore, setGameplayScore] = useState<string>("0");
    const [narrativeScore, setNarrativeScore] = useState<string>("0");
    const [soundScore, setSoundScore] = useState<string>("0");
    const [artScore, setArtScore] = useState<string>("0");
    const [enjoymentScore, setEnjoymentScore] = useState<string>("0");
    const { user } = useUserContext();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [screenSize, setScreenSize] = useState<string>("desktop");
    const navigate = useNavigate();
    const handleAddGame = async () => {
        if (
            gameplayScore &&
            narrativeScore &&
            soundScore &&
            artScore &&
            enjoymentScore
        ) {
            const res = await addGame(
                game as RawgGame,
                user,
                Number(gameplayScore),
                Number(narrativeScore),
                Number(soundScore),
                Number(artScore),
                Number(enjoymentScore)
            );
            if (res && game) {
                navigate(`/games/${game.id}`);
            }
        }
    };

    useEffect(() => {
        if (game !== null) {
            setIsLoading(false);
        }
    }, [user, game]);

    useEffect(() => {
        const resize = resizeFunction(setScreenSize);
        return () => {
            resize();
        };
    }, []);

    if (isLoading) {
        return (
            <div className="hero min-h-screen" id="home-page-full">
                <span className="loading loading-spinner text-primary"></span>
            </div>
        );
    } else if (screenSize === "desktop" && game) {
        return (
            <>
                {user !== null || user !== undefined ? (
                    <div className="hero min-h-screen bg-base-100">
                        <div className="hero-content flex-col lg:flex-row box-content bg-base-200 shadow-xl rounded-lg p-20">
                            <img
                                src={game.background_image}
                                className="max-w-2xl rounded-lg shadow-2xl mr-12 flex-shrink-0"
                            />
                            <div className="divider lg:divider-horizontal" />
                            <div className="container ml-12 flex flex-col self-start flex-grow">
                                <h2 className="text-4xl mb-6 font-bold">
                                    {game.name}
                                </h2>
                                <h3 className="text-xl font-bold">Gameplay</h3>
                                <div>
                                    <Gameplay
                                        gameplayScore={gameplayScore}
                                        setGameplayScore={setGameplayScore}
                                    />
                                </div>
                                <h3 className="text-xl font-bold">Narrative</h3>
                                <div>
                                    <Narrative
                                        narrativeScore={narrativeScore}
                                        setNarrativeScore={setNarrativeScore}
                                    />
                                </div>
                                <h3 className="text-xl font-bold">
                                    Soundtrack / Score
                                </h3>
                                <div>
                                    <Soundtrack
                                        soundScore={soundScore}
                                        setSoundScore={setSoundScore}
                                    />
                                </div>
                                <h3 className="text-xl font-bold">
                                    Art Direction
                                </h3>
                                <div>
                                    <ArtDirection
                                        artScore={artScore}
                                        setArtScore={setArtScore}
                                    />
                                </div>
                                <h3 className="text-xl font-bold">
                                    Personal Enjoyment
                                </h3>
                                <Enjoyment
                                    enjoymentScore={enjoymentScore}
                                    setEnjoymentScore={setEnjoymentScore}
                                />
                                <button
                                    className="btn mt-12"
                                    onClick={handleAddGame}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                ) : !user ? (
                    <Link to="/login">
                        <p>login</p>
                    </Link>
                ) : (
                    <p>select a game first</p>
                )}
            </>
        );
    } else if (screenSize === "mobile" && game) {
        return (
            <>
                {user !== null || user !== undefined ? (
                    <div>
                        <div className="hero-content flex-col   mt-10">
                            <h2 className="text-2xl mb-6 font-bold mobile-add-game-text">
                                {game.name}
                            </h2>
                            <img
                                src={game.background_image}
                                className="mobile-add-game-image"
                            />
                            <div className="divider lg:divider-horizontal" />
                            <div className="flex flex-col self-center">
                                <h3 className="text-lg font-bold mobile-add-game-text">
                                    Gameplay
                                </h3>
                                <div>
                                    <Gameplay
                                        gameplayScore={gameplayScore}
                                        setGameplayScore={setGameplayScore}
                                    />
                                </div>
                                <h3 className="text-lg font-bold mobile-add-game-text">
                                    Narrative
                                </h3>
                                <div>
                                    <Narrative
                                        narrativeScore={narrativeScore}
                                        setNarrativeScore={setNarrativeScore}
                                    />
                                </div>
                                <h3 className="text-lg font-bold mobile-add-game-text">
                                    Soundtrack / Score
                                </h3>
                                <div>
                                    <Soundtrack
                                        soundScore={soundScore}
                                        setSoundScore={setSoundScore}
                                    />
                                </div>
                                <h3 className="text-lg font-bold mobile-add-game-text">
                                    Art Direction
                                </h3>
                                <div>
                                    <ArtDirection
                                        artScore={artScore}
                                        setArtScore={setArtScore}
                                    />
                                </div>
                                <h3 className="text-lg font-bold mobile-add-game-text">
                                    Personal Enjoyment
                                </h3>
                                <Enjoyment
                                    enjoymentScore={enjoymentScore}
                                    setEnjoymentScore={setEnjoymentScore}
                                />
                                <button
                                    className="btn mt-12"
                                    onClick={handleAddGame}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                ) : !user ? (
                    <Link to="/login">
                        <p>login</p>
                    </Link>
                ) : (
                    <p>select a game first</p>
                )}
            </>
        );
    }
    return null;
};
