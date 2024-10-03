import { Movie } from "../../types/movie";
import * as S from "./styles";
import genres from "../../data/genres.json";
import { useEffect } from "react";
import Icon from "../icons";

interface ModalDetailsProps {
  setModalDetails: (isOpen: boolean) => void;
  movie: Movie | null;
}

const assetsUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

const ModalDetails = ({ setModalDetails, movie }: ModalDetailsProps) => {
  useEffect(() => {
    const escFunction = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModalDetails(false);
      }
    };

    document.addEventListener("keydown", escFunction, false);

    return () => {
      window.removeEventListener("keydown", escFunction);
    };
  }, [setModalDetails]);
  const handleClose = () => {
    setModalDetails(false);
  };

  const voteAverage = movie && (movie.vote_average * 10).toFixed(0);

  const releaseDate =
    movie && new Date(movie.release_date).toLocaleDateString("pt-BR");

  const genreNames =
    movie &&
    movie.genre_ids
      .map((id) => genres.find((genre) => genre.id === id)?.name)
      .filter((name) => name)
      .join(", ");

  if (!movie) return null;

  return (
    <>
      <S.Container id="modalContainer">
        <S.Modal className="modal">
          <S.Content>
            <S.Close onClick={handleClose}>
              <Icon icon="close" width={20} height={20} />
            </S.Close>
            <S.Img
              width={300}
              height={250}
              src={assetsUrl + movie.poster_path}
              alt={`${movie.title} photo`}
            />
            <S.Details className="modal-content">
              <div>
                <S.MovieTitle>{movie.title}</S.MovieTitle>

                <S.Group className="overview">
                  <S.Item>Overview:</S.Item>
                  <S.Text
                    className="overview"
                    dangerouslySetInnerHTML={{
                      __html: movie.overview,
                    }}
                  />
                </S.Group>

                <S.InlineGroup>
                  <S.Group>
                    <S.Item>Release Date: </S.Item>
                    <S.Text> {releaseDate}</S.Text>
                  </S.Group>
                  <S.Group>
                    <S.Item>Average: </S.Item>
                    <S.Text>{voteAverage}%</S.Text>
                  </S.Group>
                </S.InlineGroup>

                <S.InlineGroup>
                  <S.Group>
                    <S.Item>Generes: </S.Item>
                    <S.Text>{genreNames}</S.Text>
                  </S.Group>
                  <S.Group>
                    <S.Item>Language: </S.Item>
                    <S.Text>{movie.original_language}</S.Text>
                  </S.Group>
                </S.InlineGroup>
              </div>
            </S.Details>
          </S.Content>
        </S.Modal>
      </S.Container>
    </>
  );
};

export default ModalDetails;
