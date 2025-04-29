import { useContext } from "react"
import { MainContext } from "../Window/Window"

export const TimeSelector = () => {

    const { initTime, setInitTime } = useContext(MainContext)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInitTime(parseInt(e.target.value));
      };

    return(
        <div>
            <label htmlFor="breathingMin">Minutes for Breathing</label>
            <input 
            type="number" 
            id="breathingMin" 
            name="breathingMin"
            value={initTime ?? 0}
            onChange={handleInputChange}
            min={1} max={60} 
            defaultValue={5} />
        </div>
    )
}