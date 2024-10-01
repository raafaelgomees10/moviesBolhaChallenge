import { useState } from "react";
import * as S from "./styles";
import Icon from "../icons";

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleBlur = () => {
    const searchInput = document.querySelector<HTMLInputElement>(".search-txt");
    if (searchInput && !searchInput.value) {
      setIsExpanded(false);
    }
  };

  return (
    <S.SearchBox onClick={handleExpand} $isExpanded={isExpanded}>
      <S.SearchButton>
        <Icon icon="search" width={24} height={24} />
      </S.SearchButton>
      <S.SearchInput
        className="search-txt"
        type="search"
        placeholder="Type to search..."
        $isExpanded={isExpanded}
        onBlur={handleBlur}
      />
    </S.SearchBox>
  );
};

export default SearchBar;
