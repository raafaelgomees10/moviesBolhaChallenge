import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 
* {
	box-sizing: border-box;
	color: ${(props) => props.theme.colors.primary};
	font-family: "Poppins", sans-serif;
	font-size: 62.5%;
	list-style: none;
  text-decoration: none;
}

html, body{
  background: ${(props) => props.theme.bg};
  display:  flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  padding:0;
  transition: all 0.25s linear;
}


.mainContainer {
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 767px) {
    max-width: 340px;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    max-width: 735px;
  }
}

.movies-list {
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(4, 1fr);
  padding: 15px;
}

.movie-item {
}

.movie-item-header {
}

.movie-item__poster {
  display: block;
}

.movie-item__title {
  font-size: 1.3em;
  margin: 0;
  margin-top: 10px;
}

.movie-item__badge {
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
}

.toggleTheme{
  background-color: transparent;
  border: none;
}

@keyframes animeLeft {
  0%{
    opacity: 0;
    transform: translateX(-20px);
  }
    100%{
        opacity: 1;
        transform: initial;
    }
}
@keyframes animeUp {

0% {
  opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fadeUp{
  animation: animeUp 1s ease forwards;
  animation-delay: .5s;
  animation-duration: 1s;
  opacity: 0;
}
.fadeLeft{
  animation: animeLeft .4s ease forwards;
}
`;
