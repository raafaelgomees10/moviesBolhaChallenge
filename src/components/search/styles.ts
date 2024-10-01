import styled, { css } from "styled-components";

interface SearchInputProps {
  $isExpanded: boolean;
}

export const SearchBox = styled.div<SearchInputProps>`
  cursor: pointer;
  height: 40px;
  border-radius: 40px;
  padding: 8px;
  display: flex;
  align-items: center;
  transition: 0.4s;

  ${(props) =>
    props.$isExpanded &&
    css`
      border: 1px solid #fff;
      cursor: unset;
    `}
`;

export const SearchInput = styled.input<SearchInputProps>`
  border: none;
  background: none;
  outline: none;
  color: #fff;
  font-size: 1.4rem;
  width: 0;
  padding: 0;
  transition: 0.4s;

  ${(props) =>
    props.$isExpanded &&
    css`
      width: 240px;
      padding: 0 6px;
    `}
`;

export const SearchButton = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
`;
