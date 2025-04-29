import { useContext } from "react";
import { MainContext } from "../Window/Window";

export const ThemeToggle = () => {

     const {setDarkMode} = useContext(MainContext);

    return (
        <div>
            <label htmlFor="dark_light-mode"> Dark Mode </label>
            <input type="checkbox" name="dark_light-mode" onChange={(e) => {
                setDarkMode(e.target.checked)
            }}/>
        </div>
    )
}