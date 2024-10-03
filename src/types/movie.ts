export interface Movie {
  id: number;
  title: string;
  overview: string;
  featured?: boolean;
  poster_path: string;
  genre_ids: number[];
  release_date: string;
  vote_average: number;
  original_language: string;
}
