import { Circle } from "../Circle/Circle"
import { PaceInput } from "../PaceInput/PaceInput"
import { TimeSelector } from "../TimeSelector/TimeSelector"
import { Header, MainArea, WindowContainer } from "./Window.styles"
import { ThemeToggle } from "../ThemeToggle/ThemeToggle"
import { createContext } from "react"
import { Background } from "../Background/Background"

interface MainContextProps {
    bpm: number
    theme: string
}

const MainContext = createContext({} as MainContextProps)

    const paceValidation = true;
    const timeValidation = true;

export const Window = () =>{
    return (
        <MainContext.Provider value={{} as MainContextProps}>
            <WindowContainer>
                <Background>
                    <Header>
                        <PaceInput />
                        <ThemeToggle />
                    </Header>
                    <MainArea>
                        <TimeSelector />
                        <Circle paceValidation={paceValidation} timeValidation={timeValidation} />
                    </MainArea>
                </Background>
            </WindowContainer>
        </MainContext.Provider>
    )
}