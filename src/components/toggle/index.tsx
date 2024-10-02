import { useState } from "react";
import * as S from "./styles";

interface ToggleProps {
  colorOne: string;
  colorTwo: string;
}

const Toggle = ({ colorOne, colorTwo }: ToggleProps) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => setIsOn(!isOn);

  return (
    <S.Container>
      <S.Label>Destaques</S.Label>
      <S.Checkbox
        checked={isOn}
        id="toggle"
        type="checkbox"
        onChange={handleToggle}
      />
      <S.Button
        isOn={isOn}
        htmlFor="toggle"
        colorOne={colorOne}
        colorTwo={colorTwo}
      >
        <S.Ball />
      </S.Button>
    </S.Container>
  );
};

export default Toggle;
