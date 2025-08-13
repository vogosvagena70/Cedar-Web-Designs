import { useEffect, useState } from "react";

export function useSystemTheme() {
  const getTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const [theme, setTheme] = useState<string>(getTheme);

  useEffect(() => {
    const darkThemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => setTheme(getTheme());

    darkThemeMediaQuery.addEventListener("change", handleChange);

    return () => {
      darkThemeMediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return theme;
}
