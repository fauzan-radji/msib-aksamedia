import { SettingsContext } from "./SettingsProvider";
import { useContext } from "react";

export default function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
}
