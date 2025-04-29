import { Circle } from "../Circle/Circle"
import { PaceInput } from "../PaceInput/PaceInput"
import { TimeSelector } from "../TimeSelector/TimeSelector"
import { Header, MainArea, WindowContainer } from "./Window.styles"
import { ThemeToggle } from "../ThemeToggle/ThemeToggle"
import { createContext } from "react"

interface MainContextProps {
    bpm: number
    theme: string
}

const MainContext = createContext({} as MainContextProps)

    const paceValidation = true; // Mock validation to be true
    const timeValidation = true

export const Window = () =>{
    return (
        <MainContext.Provider value={{} as MainContextProps}>
            <WindowContainer>
                <Header>
                    <PaceInput />
                    <ThemeToggle />
                </Header>
                <MainArea>
                    <TimeSelector />
                    <Circle paceValidation={paceValidation} timeValidation={timeValidation} />
                </MainArea>
            </WindowContainer>
        </MainContext.Provider>
    )
}