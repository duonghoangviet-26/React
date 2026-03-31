
import { createContext, useState } from "react";

type ThemeContextType = {
    theme: string;
    setTheme: (theme: string) => void;
};

// create context
export const ThemeContext = createContext<ThemeContextType | null>(null);

// provider component
export const ThemeProvider = ({ children }: { children: any }) => {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};