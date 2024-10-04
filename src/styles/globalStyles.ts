import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 
* {
	box-sizing: border-box;
	color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
	font-size: 62.5%;
	list-style: none;
  text-decoration: none;

  ::-webkit-scrollbar {
	  width: 6px;
  }

  ::-webkit-scrollbar-track {
	  background-color: ${(props) => props.theme.bg};
  }

  ::-webkit-scrollbar-thumb {
	  background-color: ${(props) => props.theme.colors.secondary};
	  border-radius: 4px;
  }
}

html, body{
  background: ${(props) => props.theme.bg};
  margin: 0;
  padding:0;
  overflow-x: hidden;
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

svg{
  fill: ${(props) => props.theme.colors.primary};
}

.icon{
  > svg {
    cursor: pointer;
    transition: fill 0.2s;

    &:hover {
      fill: ${(props) => props.theme.colors.secondary};
    }
  } 
}
.toggleTheme{
  background-color: transparent;
  border: none;
  padding: 0;
}

.iconTheme{

  fill: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};


  transition: stroke .2s, fill 0.2s;
    &:hover {
      fill: ${(props) => props.theme.colors.secondary};
      stroke: ${(props) => props.theme.colors.secondary};
    }
}

`;
