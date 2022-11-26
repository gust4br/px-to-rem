import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ThemeProviderProps {
  children: ReactNode
}

interface ThemeContext{
  theme: string,
  setTheme: (value: string) => void;
}

const ThemeContext = createContext({} as ThemeContext);

export function ThemeProvider({children}: ThemeProviderProps){
  const [theme, setTheme] = useState('');

  useEffect(() => {
    if(localStorage.getItem('theme'))
      setTheme(String(localStorage.getItem('theme')));
    else if(localStorage.getItem('theme') === null)
      setTheme('dark');
  }, []);

  useEffect(() => {
      localStorage.setItem('theme', theme);
  }, [theme]);

  return(
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(){
  const context = useContext(ThemeContext);
  const { theme, setTheme} = context;

  return { theme, setTheme}
}