import { useEffect, useRef, useState } from "react";
import Icon from "../icons";
import * as S from "./styles";
import SearchBar from "../search";
interface HeaderProps {
  onSearchChange: (text: string) => void; // Tipagem do callback
}

const Header = ({ onSearchChange }: HeaderProps) => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  const mobile = false;
  return (
    <>
      <S.Container ref={headerRef} className={isScrolled ? "scrolled" : ""}>
        <S.Navigation>
          <p>MOOVIE .</p>
          <S.Ul>
            <S.Li>
              <SearchBar onSearchChange={onSearchChange} />
            </S.Li>
            <S.Li>
              <S.Link href="#">
                <S.Title>Home</S.Title>
              </S.Link>
            </S.Li>
            <S.Li>
              <S.Link href="#">
                <S.Title>Highlights</S.Title>
              </S.Link>
            </S.Li>
            <S.Li>
              <Icon icon="notification" width={26} height={26} />
            </S.Li>
            <S.Li>
              <Icon icon="profile" width={24} height={24} />
            </S.Li>
          </S.Ul>
        </S.Navigation>
      </S.Container>
      <S.Spacer $height={!mobile ? headerHeight : 40} />
    </>
  );
};

export default Header;
