import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Theme, ThemeContextType } from "../types";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>("theme1");
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme") as Theme | null;
    if (savedTheme && ["theme1", "theme2", "theme3"].includes(savedTheme)) {
      setThemeState(savedTheme);
    }
  }, []);

  const setTheme = (newTheme: Theme): void => {
    setIsAnimating(true);
    localStorage.setItem("selectedTheme", newTheme);
    setTimeout(() => {
      setThemeState(newTheme);
      setTimeout(() => setIsAnimating(false), 300);
    }, 150);
  };

  const value: ThemeContextType = {
    theme,
    setTheme,
    isAnimating,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
