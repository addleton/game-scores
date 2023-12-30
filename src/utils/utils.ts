import Game from "../types/Types";

export function totalScore(game: Game): number {
  return (
    (game.gameplay + game.narrative + game.art + game.music + game.enjoyment) /
    5
  );
}

export function getRandomGames<T>(games: T[]): T[] {
  const randomGamesArr: T[] = [];
  const usedIndexArr: number[] = [];

  while (randomGamesArr.length < 5 && usedIndexArr.length < games.length) {
    let randomIndex = Math.floor(Math.random() * games.length);

    if (!usedIndexArr.includes(randomIndex)) {
      randomGamesArr.push(games[randomIndex]);
      usedIndexArr.push(randomIndex);
    }
  }
  return randomGamesArr;
}
