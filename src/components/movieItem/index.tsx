import { Movie } from "../../types/movie";
import * as S from "./styles";

const assetsUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

interface MovieItemProps {
  movie: Movie;
}

export default function MovieItem({ movie }: MovieItemProps) {
  return (
    <S.Container>
      <S.ImageBox>
        <S.Image
          alt={movie.title}
          src={assetsUrl + movie.poster_path}
          draggable={false}
        />
        {movie.featured && <S.Highlight>Em destaque</S.Highlight>}
      </S.ImageBox>

      <S.Title>{movie.title}</S.Title>
    </S.Container>
  );
}
