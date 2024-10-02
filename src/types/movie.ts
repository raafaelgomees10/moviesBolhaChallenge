export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  featured?: boolean;
  genre_ids: number[];
}
