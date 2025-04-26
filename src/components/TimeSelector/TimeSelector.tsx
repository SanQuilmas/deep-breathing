export const TimeSelector = () => {
    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem"}}>
            <label htmlFor="breathingMin">Minutes for Breathing</label>
            <input type="number" name="breathingMin" style={{width: "3rem"}}></input>
        </div>
    )
}