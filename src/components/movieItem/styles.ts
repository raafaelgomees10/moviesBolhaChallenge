import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  transition: 0.4s all ease-in-out;

  &:hover {
    transform: scale(1.07);
  }
`;

export const ImageBox = styled.div`
  position: relative;
`;

export const Image = styled.img`
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  display: block;
  border-radius: 8px;
  height: 330px;
  width: 220px;

  @media (max-width: 767px) {
    height: 230px;
    width: 150px;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    height: 280px;
    width: 180px;
  }
`;

export const Highlight = styled.span`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 3px;
  bottom: 0;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 500;
  left: 50%;
  line-height: 1;
  transform: translateX(-50%);
  padding: 8px 10px;
  position: absolute;
  white-space: nowrap;
  z-index: 1;

  @media (max-width: 767px) {
    font-size: 1.4rem;
    padding: 6px 8px;
    left: 55%;
  }
`;

export const Title = styled.h3`
  font-size: 1.4rem;
  font-weight: 300;
  letter-spacing: 0.5px;

  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;
