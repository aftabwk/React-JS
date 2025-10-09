import { createContext, useContext } from "react";
//this will create context
export const ThemeContext = createContext({
  themeMode: "light", //deffault value
  darkTheme: () => {}, //deffault method
  lightMode: () => {}, //deffault method
});
//Directly export provider
export const ThemeProvider = ThemeContext.Provider;
//Custom hook
export default function useTheme() {
  return useContext(ThemeContext);
}
