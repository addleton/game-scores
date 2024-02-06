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

// export function getRandomGames<T>(games: T[]): T[] {
//   const randomGamesArr: T[] = [];
//   const usedIndexArr: number[] = [];

//   while (randomGamesArr.length < 12 && usedIndexArr.length < games.length) {
//     let randomIndex = Math.floor(Math.random() * games.length);

//     if (!usedIndexArr.includes(randomIndex)) {
//       randomGamesArr.push(games[randomIndex]);
//       usedIndexArr.push(randomIndex);
//     }
//   }
//   const splitArrays = [];
//   for (let i = 0; i < randomGamesArr.length; i += 4) {
//     splitArrays.push(randomGamesArr.slice(i, i + 4));
//   }

//   return splitArrays;
// }

export const getRandomGames = (games, count: number) => {
  const randomGames = [];
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
