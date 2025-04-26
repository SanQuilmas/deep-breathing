export const BPMInput = () => {
    return(
        <div>
            <label htmlFor="bpmtoggle"> Select BPM </label>
            <select name="bpmtoggle">
                <option value={70}>70</option>
                <option value={80}>80</option>
                <option value={95}>95</option>
                <option value={120}>120</option>
            </select>
        </div>
    )
}