import { Circle } from "../Circle/Circle"
import { BPMInput } from "../BPMInput/BPMInput"
import { TimeSelector } from "../TimeSelector/TimeSelector"
import { Header, MainArea, WindowContainer } from "./Window.styles"
import { ThemeToggle } from "../ThemeToggle/ThemeToggle"

export const Window = () =>{
    return (
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
    )
}