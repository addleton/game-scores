import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { fetchAndStoreGames } from "../../utils/api";
import MobileRecommendedCard from "./MobileRecommendedCard";
import { resizeFunction } from "../../utils/utils";
import DesktopRecommendedCard from "./DesktopRecommendedCard";
import { HomeProps, FirebaseGame } from "../../types/Types";

const Home: React.FC<HomeProps> = ({
    homepageSearchInput,
    setHomepageSearchInput,
}) => {
    const [screenSize, setScreenSize] = useState<string>("desktop");
    const [gameplayGames, setGameplayGames] = useState<FirebaseGame[] | null>(
        null
    );
    const [narrativeGames, setNarrativeGames] = useState<FirebaseGame[] | null>(
        null
    );
    const [musicGames, setMusicGames] = useState<FirebaseGame[] | null>(null);
    const [artGames, setArtGames] = useState<FirebaseGame[] | null>(null);
    const [gotAllGames, setGotAllGames] = useState(false);
    const { user } = useUserContext();
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const handleSearchSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (homepageSearchInput) {
            navigate("/game-search");
        }
    };

    const retrieveInfo = async () => {
        setHomepageSearchInput("");
        if (!gameplayGames || !narrativeGames || !musicGames || !artGames) {
            const allGames = await fetchAndStoreGames();
            setGameplayGames(allGames.gameplayGames);
            setNarrativeGames(allGames.narrativeGames);
            setMusicGames(allGames.musicGames);
            setArtGames(allGames.artGames);
            setGotAllGames(true);
        } else if (user !== undefined) {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        retrieveInfo();
    }, [gotAllGames, user]);

    useEffect(() => {
        const resize = resizeFunction(setScreenSize);
        return () => {
            resize();
        };
    }, []);

    if (screenSize === "desktop") {
        if (isLoading) {
            return (
                <div className="hero min-h-screen">
                    <span className="loading loading-spinner text-primary"></span>
                </div>
            );
        } else {
            return (
                <div className="hero min-h-screen max-w-screen min-w-screen">
                    {user ? (
                        <div className="home-page-container">
                            <div className="hero min-h-screen bg-primary">
                                <div className="hero-content text-center text-neutral-content">
                                    <div className="max-w-md">
                                        <h1 className="mb-5 text-5xl font-bold">
                                            Welcome!
                                        </h1>
                                        <p className="mb-5">
                                            Step into a community-driven
                                            platform where your opinions matter.
                                            Whether you're a casual player or a
                                            hardcore enthusiast, this is your
                                            space to rate and review the games
                                            you've played.
                                        </p>
                                        <form
                                            className="flex justify-center"
                                            onSubmit={handleSearchSubmit}
                                        >
                                            <div className="form-control w-5/6">
                                                <input
                                                    type="text"
                                                    placeholder="Search games"
                                                    className="input input-bordered input-secondary w-24 md:w-auto"
                                                    value={homepageSearchInput}
                                                    onChange={(e) => {
                                                        setHomepageSearchInput(
                                                            e.target.value
                                                        );
                                                    }}
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="home-page hero ">
                                <h1 className="text-xl font-bold ml-20 mb-12 mt-20">
                                    Discover games celebrated for...
                                </h1>
                                <div className="home-page-card-section shadow-2xl">
                                    <h2 className="ml-12 home-page-card-titles text-lg">
                                        Unrivaled gameplay
                                    </h2>
                                    <div className="home-games flex">
                                        {gameplayGames
                                            ? gameplayGames.map((game) => {
                                                  return (
                                                      <DesktopRecommendedCard
                                                          key={game.id}
                                                          game={game}
                                                      />
                                                  );
                                              })
                                            : null}
                                    </div>
                                </div>
                                <div className="divider home-page-divider" />
                                <div className="home-page-card-section shadow-2xl ">
                                    <h2 className="ml-12 home-page-card-titles text-lg">
                                        Captivating stories
                                    </h2>
                                    <div className="home-games flex">
                                        {narrativeGames
                                            ? narrativeGames.map((game) => {
                                                  return (
                                                      <DesktopRecommendedCard
                                                          key={game.id}
                                                          game={game}
                                                      />
                                                  );
                                              })
                                            : null}
                                    </div>
                                </div>
                                <div className="divider home-page-divider" />
                                <div className="home-page-card-section  shadow-2xl">
                                    <h2 className="ml-12 home-page-card-titles text-lg">
                                        Unforgettable music
                                    </h2>
                                    <div className="home-games flex">
                                        {musicGames
                                            ? musicGames.map((game) => {
                                                  return (
                                                      <DesktopRecommendedCard
                                                          key={game.id}
                                                          game={game}
                                                      />
                                                  );
                                              })
                                            : null}
                                    </div>
                                </div>
                                <div className="divider home-page-divider" />
                                <div className="home-page-card-section  shadow-2xl">
                                    <h2 className="ml-12 home-page-card-titles text-lg">
                                        Visually stunning artwork
                                    </h2>
                                    <div className="home-games flex">
                                        {artGames
                                            ? artGames.map((game) => {
                                                  return (
                                                      <DesktopRecommendedCard
                                                          key={game.id}
                                                          game={game}
                                                      />
                                                  );
                                              })
                                            : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="hero-content flex-col lg:flex-row">
                            <img src="/mario-luigi.png" className="max-w-sm" />
                            <div>
                                <h1 className="text-5xl font-bold">
                                    Welcome to myGameScores
                                </h1>
                                <p className="py-6">
                                    Step into a community-driven platform where
                                    your opinions matter. Whether you're a
                                    casual player or a hardcore enthusiast, this
                                    is your space to rate and review the games
                                    you've played.
                                </p>
                                {user ? null : (
                                    <Link to="/login">
                                        <button className="btn btn-primary">
                                            Log In
                                        </button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            );
        }
    } else {
        if (isLoading) {
            return (
                <div className="hero min-h-screen">
                    <span className="loading loading-spinner text-primary"></span>
                </div>
            );
        } else {
            return (
                <div className=" min-h-screen max-w-screen">
                    {user ? (
                        <div className="max-w-screen">
                            <div className="hero min-h-screen min-w-screen bg-primary">
                                <div className="hero-content text-center text-neutral-content">
                                    <div className="max-w-screen mobile-home-search">
                                        <h1 className="mb-5 text-2xl font-bold">
                                            Welcome!
                                        </h1>
                                        <p className="mb-5">
                                            Step into a community-driven
                                            platform where your opinions matter.
                                            Whether you're a casual player or a
                                            hardcore enthusiast, this is your
                                            space to rate and review the games
                                            you've played.
                                        </p>
                                        <form
                                            onSubmit={handleSearchSubmit}
                                            className="container mx-auto flex items-center justify-center mt-16 mb-8"
                                        >
                                            <div className="form-control w-3/6">
                                                <input
                                                    type="text"
                                                    placeholder="Search games"
                                                    className="input input-bordered input-secondary  md:w-auto"
                                                    value={homepageSearchInput}
                                                    onChange={(e) => {
                                                        setHomepageSearchInput(
                                                            e.target.value
                                                        );
                                                    }}
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="mobile-recommended-section">
                                <h1 className="text-lg font-bold  mb-6 mt-20">
                                    Discover games celebrated for...
                                </h1>
                                <div>
                                    <h2 className="home-page-card-titles text-lg">
                                        Unrivaled gameplay
                                    </h2>
                                    <div className="mobile-home-games ">
                                        {gameplayGames
                                            ? gameplayGames
                                                  .slice(0, 1)
                                                  .map((game) => {
                                                      return (
                                                          <MobileRecommendedCard
                                                              key={game.id}
                                                              game={game}
                                                          />
                                                      );
                                                  })
                                            : null}
                                    </div>
                                </div>
                                <div className="divider home-page-divider" />
                                <div>
                                    <h2 className=" home-page-card-titles text-lg">
                                        Captivating stories
                                    </h2>
                                    <div className="mobile-home-games ">
                                        {narrativeGames
                                            ? narrativeGames
                                                  .slice(0, 1)
                                                  .map((game) => {
                                                      return (
                                                          <MobileRecommendedCard
                                                              key={game.id}
                                                              game={game}
                                                          />
                                                      );
                                                  })
                                            : null}
                                    </div>
                                </div>
                                <div className="divider home-page-divider" />
                                <div>
                                    <h2 className="home-page-card-titles text-lg">
                                        Unforgettable music
                                    </h2>
                                    <div className="mobile-home-games ">
                                        {musicGames
                                            ? musicGames
                                                  .slice(0, 1)
                                                  .map((game) => {
                                                      return (
                                                          <MobileRecommendedCard
                                                              key={game.id}
                                                              game={game}
                                                          />
                                                      );
                                                  })
                                            : null}
                                    </div>
                                </div>
                                <div className="divider home-page-divider" />
                                <div>
                                    <h2 className="home-page-card-titles text-lg">
                                        Visually stunning artwork
                                    </h2>
                                    <div className="mobile-home-games">
                                        {artGames
                                            ? artGames
                                                  .slice(0, 1)
                                                  .map((game) => {
                                                      return (
                                                          <MobileRecommendedCard
                                                              key={game.id}
                                                              game={game}
                                                          />
                                                      );
                                                  })
                                            : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="mobile-logged-out-homepage-container mx-auto">
                            <div className="mobile-logged-out-homepage">
                                <h1 className="text-5xl font-bold">
                                    Welcome to myGameScores
                                </h1>
                                <p className="py-6">
                                    Step into a community-driven platform where
                                    your opinions matter. Whether you're a
                                    casual player or a hardcore enthusiast, this
                                    is your space to rate and review the games
                                    you've played.
                                </p>
                                {user ? null : (
                                    <Link to="/login">
                                        <button className="btn btn-primary">
                                            Log In
                                        </button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            );
        }
    }
};

export default Home;
