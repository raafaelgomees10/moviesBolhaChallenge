import styled, { css } from "styled-components";

interface FilterProps {
  $isVisible: boolean;
}

export const Container = styled.div`
  border-radius: 6px;
  margin: 16px 0;
`;

export const Label = styled.div<FilterProps>`
  align-items: center;
  display: inline-flex;
  cursor: pointer;
  font-size: 1.8rem;
  transition: background-color 0.3s;

  > svg {
    margin-left: 16px;
    transition: transform 0.3s ease;

    ${(props) =>
      props.$isVisible &&
      css`
        transform: rotate(90deg);
      `}
  }
`;

export const Box = styled.ul<FilterProps>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, opacity 0.3s ease;
  width: 100%;

  ${(props) =>
    props.$isVisible &&
    css`
      max-height: 250px;
      opacity: 1;
    `}
`;

export const FilterItem = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  margin: 8px 0;
`;

export const Checkbox = styled.input`
  cursor: pointer;
  margin-right: 10px;
`;

export const FilterLabel = styled.li`
  cursor: pointer;
  font-size: 1.6rem;
  transition: background-color 0.3s;
`;
