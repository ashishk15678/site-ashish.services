"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export const Theme = createContext<null | {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}>(null);

export function useTheme() {
  const context = useContext(Theme);
  if (!context || context == null) {
    throw Error("Context must be used inside a provider");
  }
  return context;
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (!theme) return;
    setTheme(theme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Theme.Provider value={{ theme, setTheme }}>{children}</Theme.Provider>
  );
};
