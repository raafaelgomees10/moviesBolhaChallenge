import styled from "styled-components";

interface ToggleProps {
  $isOn: boolean;
  $colorOne: string;
  $colorTwo: string;
}

export const Container = styled.div``;

export const Label = styled.span`
  display: inline-block;
  font-size: 1.8rem;
`;

export const Checkbox = styled.input`
  height: 0;
  visibility: hidden;
  width: 0;
`;

export const Button = styled.label<ToggleProps>`
  align-items: center;
  background: ${(props) => (props.$isOn ? props.$colorOne : props.$colorTwo)};
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  height: 24px;
  justify-content: space-between;
  position: relative;
  transition: background-color 0.2s;
  width: 55px;
`;

export const Ball = styled.span`
  background: #fff;
  border-radius: 45px;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  height: 20px;
  left: 2px;
  position: absolute;
  transition: 0.2s;
  top: 2px;
  width: 20px;

  input:checked + label & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  label:active & {
    width: 29px;
  }
`;
