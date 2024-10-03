import Header from "../header";
import Toggle from "../toggle";
import Filters from "../filters";
import { useState } from "react";
import MoviesList from "../movieList";
import { Movie } from "../../types/movie";
import movies from "../../data/popular.json";
import upcoming from "../../data/upcoming.json";
import topRated from "../../data/top-rated.json";
import nowPlaying from "../../data/now-playing.json";

const Content = () => {
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

      <div className="mainContent">
        <Toggle colorOne="#FF6B00" colorTwo="#a3a3a3" />
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
    </div>
  );
};

export default Content;
