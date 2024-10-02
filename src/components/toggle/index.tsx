import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { toggleHighlight } from "../../store/toggleSlice";
import { RootState } from "../../store/configureStore";

interface ToggleProps {
  colorOne: string;
  colorTwo: string;
}

const Toggle = ({ colorOne, colorTwo }: ToggleProps) => {
  const dispatch = useDispatch();
  const isOn = useSelector((state: RootState) => state.toggle.isHighlightOn);

  const handleToggle = () => {
    dispatch(toggleHighlight());
  };

  return (
    <S.Container>
      <S.Label>Highlights</S.Label>
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
