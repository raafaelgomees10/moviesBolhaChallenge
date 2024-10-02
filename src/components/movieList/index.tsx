import Icon from "../icons";
import * as S from "./styles";
import MovieItem from "../movieItem";
import { Movie } from "../../types/movie";
import { useSelector } from "react-redux";
import "@splidejs/react-splide/css/sea-green";
import { RootState } from "../../store/configureStore";
import { Splide, SplideSlide } from "@splidejs/react-splide";

interface MovieListProps {
  title: string;
  movies: Movie[];
}

export default function MoviesList({ title, movies }: MovieListProps) {
  const isHighlightOn = useSelector(
    (state: RootState) => state.toggle.isHighlightOn
  );

  const sortedMovies = isHighlightOn
    ? [...movies].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    : movies;

  return (
    <S.Container>
      <S.Header>
        {isHighlightOn && <Icon icon="highlights" height={30} width={30} />}
        <S.Title>{title}</S.Title>
      </S.Header>
      <S.Content>
        <Splide
          aria-label="My Favorite Images"
          options={{
            width: 1200,
            gap: 32,
            perPage: 5,
            perMove: 1,
            arrows: true,
          }}
        >
          {sortedMovies.map((movie: Movie) => (
            <SplideSlide key={movie.id}>
              <MovieItem movie={movie} />
            </SplideSlide>
          ))}
        </Splide>
      </S.Content>
    </S.Container>
  );
}
