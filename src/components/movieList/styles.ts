import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  width: 100%;
  display: flex;
  align-items: center;

  &::after {
    background-color: #fff;
    margin-left: 12px;
    content: "";
    width: 100%;
    height: 1px;
    opacity: 0.3;
  }
`;

export const Content = styled.div`
  .splide {
    &__slide {
      /* width: 220px !important; */
    }

    &__track {
      padding: 32px 0;
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
        /* fill: ${(props) => props.theme.colors.secondary}; */
        opacity: 0.8;
      }

      > svg {
        /* fill: ${(props) => props.theme.colors.secondary}; */
        width: 35px;
        height: 35px;

        &:hover {
          /* fill: ${(props) => props.theme.colors.secondary}; */
          opacity: 0.8;
        }

        &:focus-visible {
          outline: 3px solid rgb(151, 118, 86) !important;
          outline-offset: 3px;
        }
      }

      @media (max-width: 767px) {
        height: 40px;
        width: 40px;
      }
    }
  }
`;

export const Container3 = styled.div``;

export const Container4 = styled.div``;
