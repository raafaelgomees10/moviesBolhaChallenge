import Filters from "./components/filters";
import Header from "./components/header";
import MoviesList from "./components/movieList";
export default function App() {
  return (
    <div className="mainContainer">
      <Header />
      <Filters />
      <MoviesList title="Populares" />
    </div>
  );
}
