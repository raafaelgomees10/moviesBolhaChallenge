// Header.tsx
import React, { useState } from "react";
import * as S from "./styles";
import SearchBar from "../search";
import Icon from "../icons";
import useMedia from "../../hooks/useMedia";

interface HeaderProps {
  onSearchChange: (text: string) => void;
}

const Header = ({ onSearchChange }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const mobile = useMedia("(max-width:767px)");

  return (
    <S.Container>
      <S.Content className="mainContainer">
        <S.Navbar>
          <S.Logo>Moovie .</S.Logo>

          <S.MainMenu className={menuOpen ? "show" : ""}>
            <S.ListItem>
              <SearchBar onSearchChange={onSearchChange} />
            </S.ListItem>
            <S.ListItem>Home</S.ListItem>
            <S.ListItem>Blog</S.ListItem>
            <S.ListItem>Highlights</S.ListItem>
            {!mobile && (
              <>
                <S.ListItem>
                  <Icon
                    icon="notification"
                    width={mobile ? 20 : 26}
                    height={mobile ? 20 : 26}
                  />
                </S.ListItem>
                <S.ListItem>
                  <Icon
                    icon="profile"
                    width={mobile ? 18 : 24}
                    height={mobile ? 18 : 24}
                  />
                </S.ListItem>
              </>
            )}
          </S.MainMenu>
        </S.Navbar>
        {mobile && (
          <S.MobileWrapper>
            <Icon
              icon="notification"
              width={mobile ? 20 : 26}
              height={mobile ? 20 : 26}
            />
            <Icon
              icon="profile"
              width={mobile ? 18 : 24}
              height={mobile ? 18 : 24}
            />
            <S.MenuBtn onClick={toggleMenu} isOpen={menuOpen}>
              <span></span>
              <span></span>
              <span></span>
            </S.MenuBtn>
          </S.MobileWrapper>
        )}
      </S.Content>
    </S.Container>
  );
};

export default Header;
