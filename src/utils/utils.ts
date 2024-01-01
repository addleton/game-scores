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

  while (randomGamesArr.length < 12 && usedIndexArr.length < games.length) {
    let randomIndex = Math.floor(Math.random() * games.length);

    if (!usedIndexArr.includes(randomIndex)) {
      randomGamesArr.push(games[randomIndex]);
      usedIndexArr.push(randomIndex);
    }
  }
  const splitArrays = [];
  for (let i = 0; i < randomGamesArr.length; i += 4) {
    splitArrays.push(randomGamesArr.slice(i, i + 4));
  }

  return splitArrays;
}
