import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { DEFAULT_THEME, THEME_STORAGE_KEY, themes } from "../theme/tokens";
import { applyTheme } from "../theme/applyTheme";

const ThemeContext = createContext(null);
const allowedThemeIds = new Set(themes.map((item) => item.id));

function resolveTheme(stored) {
  if (stored && allowedThemeIds.has(stored)) return stored;
  return DEFAULT_THEME;
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === "undefined") return DEFAULT_THEME;
    return resolveTheme(localStorage.getItem(THEME_STORAGE_KEY));
  });

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      themes,
      setTheme: setThemeState,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
