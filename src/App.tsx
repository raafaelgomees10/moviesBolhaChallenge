import { useEffect } from "react";
import Content from "./components/content";
import { ThemeProvider } from "styled-components";
import { RootState } from "./store/configureStore";
import { setInitialTheme } from "./store/themeSlice";
import { GlobalStyles } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  useEffect(() => {
    dispatch(setInitialTheme());
  }, [dispatch]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Content />
    </ThemeProvider>
  );
}
