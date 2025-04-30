import { useContext } from "react";
import { MainContext } from "../Window/Window";
import { Wrapper, SwitchLabel, SwitchInput, Slider, Tag } from "./ThemeToggle.styles";

export const ThemeToggle = () => {

     const {theme, setTheme, setDarkMode} = useContext(MainContext);

     const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isDarkMode = e.target.checked;
        setDarkMode(isDarkMode);
        setTheme(isDarkMode ? "dark" : "light");
     }

    return (
        <Wrapper>
            <SwitchLabel>
                <SwitchInput 
                    type="checkbox" 
                    name="dark_light-mode" 
                    onChange={handleThemeChange}
                    checked={theme === "dark"}
                />
                <Slider/>
            </SwitchLabel>
            <Tag>Theme</Tag>
        </Wrapper>
    )
}