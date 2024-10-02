import styled, { css } from "styled-components";

interface FilterProps {
  $isVisible: boolean;
}

export const Container = styled.div`
  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); */
  /* border: 1px solid black; */
  margin-bottom: 20px;
  border-radius: 6px;
`;

export const Label = styled.div<FilterProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
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
  transition: max-height 0.4s ease, opacity 0.3s ease;
  opacity: 0;
  overflow: hidden;
  width: 100%;

  ${(props) =>
    props.$isVisible &&
    css`
      max-height: 250px;
      opacity: 1;
    `}
`;

export const FilterItem = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  color: #fff;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

export const FilterLabel = styled.li`
  cursor: pointer;
  font-size: 1.6rem;
  transition: background-color 0.3s;
`;
