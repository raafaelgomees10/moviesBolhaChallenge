import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";
import { Provider } from "react-redux";
import store from "./store/configureStore";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
const isDarkMode = true;

root.render(
  <Provider store={store}>
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </Provider>
);
