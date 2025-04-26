export const TimeSelector = () => {
    return(
        <div>
            <label htmlFor="breathingMin">Minutes for Breathing</label>
            <select name="breathingMin">
                <option value={2.5}>2.5</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={30}>30</option>
            </select>
        </div>
    )
}