export const InputArea = () => {
    return(
        <div>
            <input type="number" defaultValue={"BPM"}></input>
            <label htmlFor="dark_light-mode">Dark/Light</label>
            <input type="checkbox" name="dark_light-mode"/>
        </div>
    )
}