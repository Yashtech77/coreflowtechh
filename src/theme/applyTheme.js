import { DEFAULT_THEME } from "./tokens";

export function applyTheme(themeId) {
  const id = themeId || DEFAULT_THEME;
  document.documentElement.setAttribute("data-theme", id);
}
