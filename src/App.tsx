import { useState } from "react";
import { Movie } from "./types/movie";
import Header from "./components/header";
import Toggle from "./components/toggle";
import movies from "./data/popular.json";
import Filters from "./components/filters";
import upcoming from "./data/upcoming.json";
import topRated from "./data/top-rated.json";
import MoviesList from "./components/movieList";
import nowPlaying from "./data/now-playing.json";

export default function App() {
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  const handleGenreChange = (genres: number[]) => {
    setSelectedGenres(genres);
  };

  const handleSearchChange = (text: string) => {
    setSearchText(text);
  };

  const filterMovies = (movies: Movie[]) => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  return (
    <div className="mainContainer">
      <Header onSearchChange={handleSearchChange} />
      <Toggle colorOne="#FF6B00" colorTwo="#868686" />
      <Filters onGenreChange={handleGenreChange} />
      <div>
        <MoviesList
          title="Popular"
          movies={filterMovies(movies as Movie[])}
          selectedGenres={selectedGenres}
        />
        <MoviesList
          title="Keep watching"
          movies={filterMovies(nowPlaying) as Movie[]}
          selectedGenres={selectedGenres}
        />
        <MoviesList
          title="Top Rated"
          movies={filterMovies(topRated) as Movie[]}
          selectedGenres={selectedGenres}
        />
        <MoviesList
          title="Coming Soon"
          movies={filterMovies(upcoming) as Movie[]}
          selectedGenres={selectedGenres}
        />
      </div>
    </div>
  );
}
