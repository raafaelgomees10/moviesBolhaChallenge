import * as S from "./styles";
import MovieItem from "../movieItem";
import { Movie } from "../../types/movie";
import movies from "../../data/popular.json";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
interface MovieListProps {
  title: string;
}

export default function MoviesList({ title = "Populares" }: MovieListProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
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
          {movies.map((movie: Movie) => (
            <SplideSlide key={movie.id}>
              <MovieItem movie={movie} />
            </SplideSlide>
          ))}
        </Splide>
      </S.Content>
    </S.Container>
  );
}
