import { useState } from "react";
import * as S from "./styles";
import genres from "../../data/genres.json";
import Icon from "../icons";

const Filters = () => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

  const handleSelectGenre = (id: number) => {
    if (selectedGenres.includes(id)) {
      setSelectedGenres(selectedGenres.filter((genreId) => genreId !== id));
    } else {
      setSelectedGenres([...selectedGenres, id]);
    }
  };

  return (
    <S.Container>
      <S.Label onClick={() => setVisible(!isVisible)} $isVisible={isVisible}>
        Filters <Icon icon="arrow" width={14} height={14} />
      </S.Label>
      <S.Box $isVisible={isVisible}>
        {genres.map((genre) => (
          <S.FilterItem key={genre.id}>
            <S.Checkbox
              type="checkbox"
              checked={selectedGenres.includes(genre.id)}
              onChange={() => handleSelectGenre(genre.id)}
            />
            <S.FilterLabel onClick={() => handleSelectGenre(genre.id)}>
              {genre.name}
            </S.FilterLabel>
          </S.FilterItem>
        ))}
      </S.Box>
    </S.Container>
  );
};

export default Filters;
