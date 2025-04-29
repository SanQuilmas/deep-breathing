import { Circle } from "../Circle/Circle"
import { PaceInput } from "../PaceInput/PaceInput"
import { TimeSelector } from "../TimeSelector/TimeSelector"
import { Header, MainArea, WindowContainer } from "./Window.styles"
import { ThemeToggle } from "../ThemeToggle/ThemeToggle"
import { createContext, useState } from "react"
import { Background } from "../Background/Background"

interface MainContextProps {
    bpm: number
    setBpm: React.Dispatch<React.SetStateAction<number>>
    theme: string
    setTheme: React.Dispatch<React.SetStateAction<string>>
    time: number
    setTime: React.Dispatch<React.SetStateAction<number>>
    initTime: number
    setInitTime: React.Dispatch<React.SetStateAction<number>>
}

const MainContext = createContext({} as MainContextProps)

export const Window = () =>{
    const [bpm, setBpm] = useState(120)
    const [theme, setTheme] = useState("light")
    const [time, setTime] = useState(0)
    const [initTime, setInitTime] = useState(0)

    return (
        <MainContext.Provider value={{ bpm, setBpm, theme, setTheme, time, setTime, initTime, setInitTime }}>
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