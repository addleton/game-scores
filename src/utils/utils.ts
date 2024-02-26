import { FirebaseGame } from "../types/Types";

export function totalScore(
    gameplay: number,
    narrative: number,
    soundtrack: number,
    artDirection: number,
    enjoyment: number
): number {
    const finalScore =
        (gameplay + narrative + soundtrack + artDirection + enjoyment) / 5;

    return finalScore;
}

export const getRandomGames = (games: FirebaseGame[], count: number) => {
    const randomGames: FirebaseGame[] = [];
    count = Math.min(count, games.length);
    while (randomGames.length < count) {
        const randomIndex = Math.floor(Math.random() * games.length);
        const randomGame = games[randomIndex];

        if (!randomGames.includes(randomGame)) {
            randomGames.push(randomGame);
        }
    }
    return randomGames;
};

export const resizeFunction = (
    setScreenSize: React.Dispatch<React.SetStateAction<string>>
) => {
    const handleResize = async () => {
        if (window.innerWidth <= 767) {
            await setScreenSize("mobile");
        } else {
            await setScreenSize("desktop");
        }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
        window.removeEventListener("resize", handleResize);
    };
};
