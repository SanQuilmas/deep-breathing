import { useContext } from "react"
import { MainContext } from "../Window/Window"
import { TimeInput } from "./TimeSelector.styles"

export const TimeSelector = () => {

    const { initTime, setInitTime } = useContext(MainContext)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInitTime(parseInt(e.target.value));
      };

    return(
        <TimeInput
            type="number" 
            id="breathingMin" 
            name="breathingMin"
            value={initTime ?? ''}
            onChange={handleInputChange}
            min={1} max={60} 
            defaultValue={5}
            placeholder="Set time" 
        />
    );
}