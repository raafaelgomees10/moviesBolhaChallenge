import { useEffect, useRef, useState } from "react";
import Icon from "../icons";
import * as S from "./styles";
import SearchBar from "../search";

const Header = () => {
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
      <S.Navigation ref={headerRef} className={isScrolled ? "scrolled" : ""}>
        <S.Content>
          <p>MOOVIE</p>
          <S.Ul>
            <S.Li>
              <SearchBar />
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
        </S.Content>
      </S.Navigation>
      <S.Spacer $height={!mobile ? headerHeight : 40} />
    </>
  );
};

export default Header;
