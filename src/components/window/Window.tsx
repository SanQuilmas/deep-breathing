import { Circle } from "../Circle/Circle"
import { InputArea } from "../InputArea/InputArea"
import { TimeSelector } from "../TimeSelector/TimeSelector"
import { Header, MainArea, WindowContainer } from "./Window.styles"

export const Window = () =>{
    return (
        <WindowContainer>
            <Header>
                <InputArea />
            </Header>
            <MainArea>
                <TimeSelector />
                <Circle/>
            </MainArea>
        </WindowContainer>
    )
}