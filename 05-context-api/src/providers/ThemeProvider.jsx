import { useState } from "react"
import { ThemeContext } from "@/store/store";
import { Outlet } from "react-router-dom";


export default function ThemeProvider() {

    const [theme, setTheme] = useState("light");

    const handleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
    }
  return (
    <ThemeContext.Provider value={{theme, handleTheme}}>

        <Outlet />
        </ThemeContext.Provider>
  )
}
