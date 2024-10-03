import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
    visibility: visible;
}
`;

const fadeImage = keyframes`

 0% {
   transform: scale(0);
   opacity: 0.0;
 }
 60% {
   transform: scale(1.05);
 }
 80% {
   transform: scale(0.95);
   opacity: 1;
 }
 100% {
   transform: scale(1);
   opacity: 1;
 } 
`;

export const Container = styled.div`
  align-items: center;
  animation: ${fadeIn} 0.5s ease-in-out;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;

export const Modal = styled.div`
  background-color: ${(props) => props.theme.colors.bg};
  border-radius: 16px;
  max-width: 90%;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    max-height: 90vh;
    overflow-y: auto;
    width: 90%;
  }
`;

export const Content = styled.div`
  background-color: ${(props) => props.theme.bg};
  display: flex;
  max-width: 750px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Img = styled.img`
  animation: ${fadeImage} 0.75s ease-in-out;
  border-radius: 5px;
  height: auto;
  max-width: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 250px;
    width: 100%;
    max-width: 100%;
    object-fit: contain;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 12px;
  }
`;

export const MovieTitle = styled.h2`
  font-size: 2.6rem;
  line-height: 1.4;
  margin: 16px 0;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 1.6rem;
    margin: 8px 0;
  }
`;

export const Group = styled.div`
  display: flex;
  margin-bottom: 16px;

  &.overview {
    display: block;
  }
`;

export const InlineGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Item = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.6px;

  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;

export const Text = styled.p`
  font-size: 1.4rem;
  margin-left: 8px;
  max-width: 220px;
  letter-spacing: 0.4px;

  &.overview {
    max-width: unset;
    margin-left: 0;
  }

  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;

export const Close = styled.div`
  background: linear-gradient(
    315deg,
    rgb(255, 122, 0) 0%,
    rgb(255, 197, 49) 100%
  );
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  right: 0;
  top: 0;
  position: absolute;
  cursor: pointer;
  border-bottom-left-radius: 5px;
`;
