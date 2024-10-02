import Filters from "./components/filters";
import Header from "./components/header";
import MoviesList from "./components/movieList";
import Toggle from "./components/toggle";
export default function App() {
  return (
    <div className="mainContainer">
      <Header />
      <Toggle colorOne="#FF6B00" colorTwo="#CCCCCC" />
      <Filters />
      <MoviesList title="Populares" />
    </div>
  );
}
