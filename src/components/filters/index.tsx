import Icon from "../icons";
import * as S from "./styles";
import { useEffect, useState } from "react";
import genres from "../../data/genres.json";

interface FiltersProps {
  onGenreChange: (selectedGenres: number[]) => void;
}

const Filters = ({ onGenreChange }: FiltersProps) => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

  useEffect(() => {
    onGenreChange(selectedGenres);
  }, [selectedGenres, onGenreChange]);

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
