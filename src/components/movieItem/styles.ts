import styled from "styled-components";

export const Container = styled.div``;

export const ImageBox = styled.div`
  position: relative;
`;

export const Image = styled.img`
  display: block;
`;

export const Highlight = styled.span`
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  font-weight: 500;
  color: #fff;
  line-height: 1;
  background-color: #e60b1c;
  padding: 7px 10px;
  white-space: nowrap;
  font-size: 1.6rem;
  position: absolute;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
`;
