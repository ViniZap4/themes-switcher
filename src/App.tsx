import GlobalStyles from "./styles/global";
import Header from "./components/Header";

import { DefaultTheme, ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import usePersistedState  from "./utils/usePersistedState";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Header toogleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
