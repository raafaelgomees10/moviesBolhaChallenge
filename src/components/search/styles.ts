import styled, { css } from "styled-components";

interface SearchInputProps {
  $isExpanded: boolean;
}

export const SearchBox = styled.div<SearchInputProps>`
  align-items: center;
  border-radius: 40px;
  cursor: pointer;
  display: flex;
  height: 40px;
  padding: 8px;
  transition: 0.4s;

  ${(props) =>
    props.$isExpanded &&
    css`
      border: 1px solid #fff;
      cursor: unset;
    `}
`;

export const SearchButton = styled.div`
  align-items: center;
  border-radius: 50%;
  display: flex;
  height: 32px;
  justify-content: center;
  transition: 0.4s;
  width: 32px;
`;

export const SearchInput = styled.input<SearchInputProps>`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 300;
  outline: none;
  padding: 0;
  transition: 0.4s;
  width: 0;

  ${(props) =>
    props.$isExpanded &&
    css`
      padding: 0 6px;
      width: 240px;

      @media (max-width: 1199px) {
        width: 190px;
      }
    `}
`;
