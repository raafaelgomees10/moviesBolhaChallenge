import Icon from "../icons";
import * as S from "./styles";
import { useState } from "react";
import MovieItem from "../movieItem";
import { Movie } from "../../types/movie";
import { useSelector } from "react-redux";
import ModalDetails from "../modalDetails";
import useMedia from "../../hooks/useMedia";
import "@splidejs/react-splide/css/sea-green";
import { RootState } from "../../store/configureStore";
import { Splide, SplideSlide } from "@splidejs/react-splide";

interface MovieListProps {
  title: string;
  movies: Movie[];
  selectedGenres: number[];
  onClick?: (movie: Movie) => void;
}

export default function MoviesList({
  title,
  movies,
  selectedGenres,
}: MovieListProps) {
  const [modalDetails, setModalDetails] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const isHighlightOn = useSelector(
    (state: RootState) => state.toggle.isHighlightOn
  );

  const filteredMovies = selectedGenres.length
    ? movies.filter((movie) =>
        movie.genre_ids.some((id) => selectedGenres.includes(id))
      )
    : movies;

  const sortedMovies = isHighlightOn
    ? [...filteredMovies].sort(
        (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
      )
    : filteredMovies;

  const handleClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setModalDetails(true);
  };

  const mobile = useMedia("(max-width:767px)");
  const tablet = useMedia("(max-width:1199px)");

  const sliderConditions =
    sortedMovies.length > 5 ||
    (mobile && sortedMovies.length > 2) ||
    (tablet && sortedMovies.length > 3);

  return (
    <S.Container>
      <S.Header>
        {isHighlightOn && <Icon icon="highlights" height={30} width={30} />}
        <S.Title>{title}</S.Title>
      </S.Header>

      {sliderConditions ? (
        <S.SlideContent>
          <Splide
            aria-label="Favorite Movies"
            options={{
              width: 1200,
              gap: 32,
              perPage: 5,
              perMove: 1,
              arrows: true,
              rewind: true,
              breakpoints: {
                767: {
                  perPage: 2,
                },
                1199: {
                  perPage: 3,
                },
              },
            }}
          >
            {sortedMovies.map((movie: Movie) => (
              <SplideSlide key={movie.id} onClick={() => handleClick(movie)}>
                <MovieItem movie={movie} />
              </SplideSlide>
            ))}
          </Splide>
        </S.SlideContent>
      ) : sortedMovies.length > 0 ? (
        <S.Content>
          {sortedMovies.map((movie: Movie) => (
            <li key={movie.id} onClick={() => handleClick(movie)}>
              <MovieItem movie={movie} />
            </li>
          ))}
        </S.Content>
      ) : (
        <S.NoResults>
          Sorry, we could not find any movies that matched your search.
        </S.NoResults>
      )}

      {modalDetails && (
        <ModalDetails movie={selectedMovie} setModalDetails={setModalDetails} />
      )}
    </S.Container>
  );
}
