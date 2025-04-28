import { Circle } from "../Circle/Circle"
import { BPMInput } from "../BPMInput/BPMInput"
import { TimeSelector } from "../TimeSelector/TimeSelector"
import { Header, MainArea, WindowContainer } from "./Window.styles"
import { ThemeToggle } from "../ThemeToggle/ThemeToggle"
import { createContext } from "react"

interface MainContextProps {
    bpm: number
    theme: string
}

const MainContext = createContext({} as MainContextProps)

export const Window = () =>{
    return (
        <MainContext.Provider value={{} as MainContextProps}>
            <WindowContainer>
                <Header>
                    <BPMInput />
                    <ThemeToggle />
                </Header>
                <MainArea>
                    <TimeSelector />
                    <Circle/>
                </MainArea>
            </WindowContainer>
        </MainContext.Provider>
    )
}