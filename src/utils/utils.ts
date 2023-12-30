import Game from "../types/Types";

export default function totalScore(game: Game): number {
  return (
    (game.gameplay + game.narrative + game.art + game.music + game.enjoyment) /
    5
  );
}
