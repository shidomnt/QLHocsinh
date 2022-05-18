import React, { useState, createContext } from 'react';
import {
  createTheme,
  Theme,
  ThemeProvider as ThemeProviderMui,
} from '@mui/material';

const initTheme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export const ThemeContext = createContext<React.Dispatch<
  React.SetStateAction<Theme>
> | null>(null);

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [theme, setTheme] = useState(initTheme);
  return (
    <ThemeContext.Provider value={setTheme}>
      <ThemeProviderMui theme={theme}>{children}</ThemeProviderMui>
    </ThemeContext.Provider>
  );
};
