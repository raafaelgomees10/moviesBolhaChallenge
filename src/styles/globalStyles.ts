import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 
* {
	box-sizing: border-box;
	color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
	font-size: 62.5%;
	list-style: none;
  text-decoration: none;
}

html, body{
  background: ${(props) => props.theme.bg};
  margin: 0;
  padding:0;
}

ul, li, p, h1, h2,h3{
  padding: 0;
  margin:0;
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

.mainContent{
  padding-top: 110px;
}

.movies-listSearched {
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(4, 1fr);
  padding: 15px;
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
