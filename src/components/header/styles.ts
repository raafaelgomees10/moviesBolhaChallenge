import styled, { css } from "styled-components";

interface HamburgerIconProps {
  isOpen: boolean;
}

export const Container = styled.div`
  align-items: center;
  background: ${(props) => props.theme.header};
  border-bottom: 1px solid rgba(255, 107, 0, 0.5);
  box-shadow: 0 2px 5px rgba(255, 107, 0, 0.4);
  display: flex;
  left: 0;
  padding: 16px 32px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;

  &.menuActive {
    border-bottom: 1px solid ${(props) => props.theme.header};
    box-shadow: unset;
  }
`;

export const Content = styled.div`
  @media (max-width: 767px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`;

export const ListItem = styled.li`
  align-self: center;
  margin: 0;
  padding: 0 8px;

  @media (max-width: 767px) {
    padding: 12px 0;
  }

  > span {
    font-size: 1.6rem;
    position: relative;
    cursor: pointer;

    &::after {
      content: "";
      width: 0%;
      height: 2px;
      background-color: ${(props) => props.theme.colors.secondary};
      position: absolute;
      left: 0;
      bottom: -3px;
      transition: width 0.5s;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

export const Logo = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 6rem;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 4rem;
  }
`;
export const MainMenu = styled.ul`
  display: flex;

  &.menuActive {
    display: flex;
  }

  @media (max-width: 767px) {
    align-items: center;
    background: ${(props) => props.theme.header};
    border-bottom: 2px solid #ff6b00;
    box-shadow: 0 2px 5px rgba(255, 107, 0, 0.3);
    flex-direction: column;
    left: 0;
    position: absolute;
    top: 93px;
    opacity: 0;
    visibility: hidden;
    max-height: 0;
    transform: translateY(-30px);
    transition: opacity 0.3s ease, transform 0.3s ease, max-height 0.3s ease;
    width: 100%;

    &.menuActive {
      opacity: 1;
      visibility: visible;
      max-height: 500px; /* Defina um valor que seja suficiente para o menu */
      transform: translateY(0);
    }
  }
`;

export const MenuBtn = styled.div<HamburgerIconProps>`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    cursor: pointer;

    span {
      background: ${(props) => props.theme.colors.primary};
      display: block;
      height: 2px;
      margin: 3px 0;
      transition: all 0.3s ease;
      width: 25px;
    }

    ${(props) =>
      props.isOpen &&
      css`
        span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        span:nth-child(2) {
          opacity: 0;
        }
        span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }
      `}
  }
`;

export const Navbar = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 60px;
`;

export const MobileWrapper = styled.div`
  align-items: center;
  display: flex;

  > svg,
  button {
    margin-right: 16px;
  }
`;
