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

export interface User {
  first_name: string;
  img_url: string;
  last_name: string;
  uid: string;
  username: string;
}

export interface UserContextProps {
  user: User | undefined | null;
  setUser: React.Dispatch<React.SetStateAction<User | undefined | null>>;
}

export interface HomeProps {
  homepageSearchInput: string;
  setHomepageSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

export interface GameSearchProps {
  setSelectedGame: React.Dispatch<React.SetStateAction<RawgGame | null>>;
  selectedGame: RawgGame | null;
  homepageSearchInput: string;
  setHomepageSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

export interface RawgGame {
  id: number;
  name: string;
  background_image: string;
  background_image_additional: string;
  developers: DeveloperObj[];
  description_raw: string;
  esrb_rating: EsrbRatingObj | null;
  genres: GenreObj[];
  metacritic: number | null;
  platforms: PlatformObj[];
  publishers: PublisherObj[];
  released: string;
}

export interface GameCardProps {
  game: RawgGame;
  setSelectedGame: React.Dispatch<React.SetStateAction<RawgGame | null>>;
  setIsGameAdded: React.Dispatch<React.SetStateAction<boolean | null>>;
}
