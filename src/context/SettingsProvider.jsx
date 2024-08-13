import { createContext, useEffect, useState } from "react";

import PropTypes from "prop-types";
import { useLocalStorage } from "@/hooks";

export const SettingsContext = createContext();

export default function SettingsProvider({ children }) {
  const [settings, setSettings] = useLocalStorage("settings", {
    theme: "system",
  });
  const [theme, setTheme] = useState(settings.theme);

  useEffect(() => {
    if (
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    setSettings((prev) => ({ ...prev, theme }));
  }, [theme]);

  return (
    <SettingsContext.Provider value={{ theme, setTheme }}>
      {children}
    </SettingsContext.Provider>
  );
}

SettingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
