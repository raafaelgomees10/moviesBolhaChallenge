import Filters from "./components/filters";
import Header from "./components/header";
import Toggle from "./components/toggle";
import movies from "./data/popular.json";
import nowPlaying from "./data/now-playing.json";
import topRated from "./data/top-rated.json";
import upcoming from "./data/upcoming.json";
import MoviesList from "./components/movieList";
import { useState } from "react";

export default function App() {
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

  const handleGenreChange = (genres: number[]) => {
    setSelectedGenres(genres);
  };
  return (
    <div className="mainContainer">
      <Header />
      <Toggle colorOne="#FF6B00" colorTwo="#868686" />
      <Filters onGenreChange={handleGenreChange} />
      <div>
        <MoviesList
          title="Populares"
          movies={movies}
          selectedGenres={selectedGenres}
        />
        <MoviesList
          title="Continuar assistindo"
          movies={nowPlaying}
          selectedGenres={selectedGenres}
        />
        <MoviesList
          title="Bem avaliados"
          movies={topRated}
          selectedGenres={selectedGenres}
        />
        <MoviesList
          title="Em breve"
          movies={upcoming}
          selectedGenres={selectedGenres}
        />
      </div>
    </div>
  );
}
