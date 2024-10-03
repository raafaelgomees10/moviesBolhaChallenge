import { useState } from "react";
import * as S from "./styles";
import Icon from "../icons";

interface SearchBarProps {
  onSearchChange: (searchText: string) => void;
}

const SearchBar = ({ onSearchChange }: SearchBarProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleBlur = () => {
    const searchInput = document.querySelector<HTMLInputElement>(".search-txt");
    if (searchInput && !searchInput.value) {
      setIsExpanded(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    onSearchChange(event.target.value);
  };

  return (
    <S.SearchBox onClick={handleExpand} $isExpanded={isExpanded}>
      <S.SearchButton $isExpanded={isExpanded}>
        <Icon icon="search" width={24} height={24} />
      </S.SearchButton>
      <S.SearchInput
        type="search"
        value={searchText}
        onBlur={handleBlur}
        className="search-txt"
        onChange={handleChange}
        $isExpanded={isExpanded}
        placeholder="Type to search..."
      />
    </S.SearchBox>
  );
};

export default SearchBar;
