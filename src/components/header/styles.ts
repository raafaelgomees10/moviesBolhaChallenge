import styled from "styled-components";

interface SpacerProps {
  $height: number;
}

export const Navigation = styled.nav`
  align-items: center;
  background-color: rebeccapurple;
  display: flex;
  left: 0;
  padding: 16px 32px;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 1300px;
  width: 100%;

  > p {
    color: #fff;
    font-size: 30px;
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
