import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 600;
  width: 100%;
  align-items: center;
  margin-left: 8px;

  &::after {
    display: block;
    background-color: ${(props) => props.theme.colors.secondary};
    margin-top: 8px;
    content: "";
    width: 70px;
    height: 2px;
  }
`;

export const SlideContent = styled.div`
  .splide {
    &__slide {
      /* width: 220px !important; */
    }

    &__track {
      padding: 32px 24px 32px 16px !important;
    }

    &__pagination {
      bottom: 0px;
      padding: 8px;
    }

    &__arrow {
      bottom: 8px;
      border-radius: 50%;
      height: 50px;
      width: 50px;
      top: 45%;

      &:hover:not(:disabled) svg {
        fill: ${(props) => props.theme.colors.secondary};
        opacity: 0.8;
      }

      > svg {
        fill: ${(props) => props.theme.colors.secondary};
        width: 35px;
        height: 35px;

        &:hover {
          fill: ${(props) => props.theme.colors.secondary};
          opacity: 0.8;
        }
      }

      @media (max-width: 767px) {
        height: 40px;
        width: 40px;
      }
    }

    &__pagination {
      &__page {
        &.is-active,
        &:hover {
          background-color: ${(props) => props.theme.colors.secondary};
        }
      }
    }
  }
`;

export const Content = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 32px 24px 32px 16px;
`;

export const NoResults = styled.p`
  font-size: 1.6rem;
`;
