import { useState, createContext, useContext, useEffect } from "react"

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState();

    const toggleTheme = () => {
        if (localStorage.getItem("theme") === "light") {
            darkThemeBtn();
        }
        else {
            lightThemeBtn();
        }
    }
    const darkThemeBtn = () => {
        document.body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
        setTheme("dark");
    }
    const lightThemeBtn = () => {
        document.body.classList.remove("dark-theme");
        localStorage.setItem("theme", "light");
        setTheme("light")
    }

    useEffect(() => {
        const currentTheme = localStorage.getItem("theme");
        if (currentTheme == "dark") {
            darkThemeBtn();
        } else {
            lightThemeBtn();
        }
    }, []);
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
const useTheme = () => useContext(ThemeContext)
export { useTheme, ThemeProvider }