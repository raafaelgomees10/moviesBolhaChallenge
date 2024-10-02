import Filters from "./components/filters";
import Header from "./components/header";
import Toggle from "./components/toggle";
import movies from "./data/popular.json";
import nowPlaying from "./data/now-playing.json";
import topRated from "./data/top-rated.json";
import upcoming from "./data/upcoming.json";
import MoviesList from "./components/movieList";

export default function App() {
  return (
    <div className="mainContainer">
      <Header />
      <Toggle colorOne="#FF6B00" colorTwo="#868686" />
      <Filters />
      <div>
        <MoviesList title="Populares" movies={movies} />
        <MoviesList title="Continuar assistindo" movies={nowPlaying} />
        <MoviesList title="Bem avaliados" movies={topRated} />
        <MoviesList title="Em breve" movies={upcoming} />
      </div>
    </div>
  );
}
