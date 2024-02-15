export interface HomepageGame {
  alt_img: string;
  avg_art_direction: number;
  avg_enjoyment: number;
  avg_final_score: number;
  avg_gameplay: number;
  avg_narrative: number;
  avg_soundtrack: number;
  description: string;
  developers: DeveloperObj[];
  esrb_rating: EsrbRatingObj;
  genres: GenreObj[];
  id: number;
  img: string;
  metacritic: number;
  name: string;
  platforms: PlatformObj[];
  publishers: PublisherObj[];
  released: string;
  total_scores: number;
}

interface EsrbRatingObj {
  id: number;
  name: string;
  slug: string;
}

interface DeveloperObj {
  games_count: number;
  id: number;
  image_background: string;
  name: string;
  slug: string;
}

interface GenreObj {
  games_count: number;
  id: number;
  image_background: string;
  name: string;
  slug: string;
}

interface PlatformObj {
  platform: Platform;
  released_at: string;
  requirements: Requirements;
}

interface Platform {
  games_count: number;
  id: number;
  image: string | null;
  image_background: string;
  name: string;
  slug: string;
  year_end: string | null;
  year_start: string | null;
}

interface Requirements {
  minimum: string;
  recommended: string;
}

interface PublisherObj {
  games_count: number;
  id: number;
  image_background: string;
  name: string;
  slug: string;
}

export interface HomepageGameCardProps {
  game: HomepageGame;
}
