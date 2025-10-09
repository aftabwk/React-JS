import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/Theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function ThemeChanger() {
  //directly interacts with themeProvider's value themeMode
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light"); //change dark to light
  };

  const darkTheme = () => {
    setThemeMode("dark"); //change light to dark
  };

  // actual change in theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark"); //remove default values
    document.querySelector("html").classList.add(themeMode); //add theme by methid
  }, [themeMode]); //run useEffect when themeMode get changes

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default ThemeChanger;
