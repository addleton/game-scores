import { useEffect, useState } from "react";
import { getUserGames } from "../../utils/api";
import { useParams } from "react-router-dom";
import { resizeFunction } from "../../utils/utils";
import UserGameCard from "./../UserGames/UserGameCard";
import MobileUserGameCard from "./../UserGames/MobileUserGameCard";
import { useUserContext } from "../../context/UserContext";
import { FirebaseUserGame } from "../../types/Types";

export const UserGames: React.FC = () => {
    const [userGames, setUserGames] = useState<FirebaseUserGame[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [screenSize, setScreenSize] = useState<string>("desktop");
    const { user } = useUserContext();
    const { username } = useParams<string>();

    const retrieveUserGames = async () => {
        if (username) {
            const data = (await getUserGames(username)) as FirebaseUserGame[];
            if (data) {
                setUserGames(data);
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        retrieveUserGames();
    }, [username]);

    useEffect(() => {
        const resize = resizeFunction(setScreenSize);
        return () => {
            resize();
        };
    }, []);

    if (isLoading) {
        return (
            <div className="hero min-h-screen">
                <span className="loading loading-spinner text-primary"></span>
            </div>
        );
    } else if (screenSize === "mobile" && user) {
        return (
            <div className="user-game-card-container">
                {user.username === username ? (
                    <h1>Your game collection</h1>
                ) : (
                    <h1>{username}'s game collection</h1>
                )}
                {userGames.map((userGame) => {
                    return (
                        <>
                            <MobileUserGameCard
                                key={userGame.id}
                                game={userGame}
                            />
                            <div className="divider w-10/12 self-center"></div>
                        </>
                    );
                })}
            </div>
        );
    } else if (user) {
        return (
            <div className="container mx-auto user-game-card-container">
                {user.username === username ? (
                    <h1 className="text-4xl font-bold mb-12">
                        Your game collection
                    </h1>
                ) : (
                    <h1 className="text-4xl font-bold mb-12">
                        {username}'s game collection
                    </h1>
                )}
                <div className="grid grid-cols-2 gap-10">
                    {userGames === undefined
                        ? null
                        : userGames.map((game) => {
                              return <UserGameCard game={game} key={game.id} />;
                          })}
                </div>
            </div>
        );
    }
    return null;
};
