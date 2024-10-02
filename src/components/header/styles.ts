import styled from "styled-components";

interface SpacerProps {
  $height: number;
}

export const Container = styled.header`
  align-items: center;
  background: ${(props) => props.theme.bg};
  border-bottom: 1px solid rgba(255, 107, 0, 0.5);
  box-shadow: 0 2px 5px rgba(255, 107, 0, 0.3);
  display: flex;
  left: 0;
  padding: 16px 32px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;

export const Navigation = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 1300px;
  width: 100%;

  > p {
    color: ${(props) => props.theme.colors.secondary};
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: 6rem;
    margin: 0;
  }
`;

export const Ul = styled.ul`
  align-items: center;
  display: flex;
  gap: 32px;
  justify-content: center;
`;

export const Li = styled.li`
  cursor: pointer;
  width: 100%;
  transition: 1s;
`;

export const Link = styled.a`
  display: block;
  position: relative;
  text-decoration: none;
  width: 100%;
`;

export const Title = styled.span`
  color: #fff;
  display: block;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 60px;
  position: relative;
`;

export const Spacer = styled.div<SpacerProps>`
  height: ${(props) => props.$height}px;
`;
