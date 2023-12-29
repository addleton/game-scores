declare module "../utils/utils" {
  interface NewGame {
    gameplay: number;
    narrative: number;
    art: number;
    music: number;
    enjoyment: number;
  }

  export default function totalScore(game: NewGame): number;
}

export default interface Game {
  id: string;
  gameplay: number;
  narrative: number;
  art: number;
  music: number;
  enjoyment: number;
  img_url: string;
  must_play: boolean;
}
