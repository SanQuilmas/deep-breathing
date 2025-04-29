import { useContext, useEffect, useState } from "react";
import { MainContext } from "../Window/Window";

export const Stopwatch = () => {
	const {time, setTime, initTime} = useContext(MainContext);
	const [isRunning, setIsRunning] = useState(false);

	const formatTime = (timeInSeconds: number) => {
		const minutes = Math.floor(timeInSeconds / 60);
		const seconds = timeInSeconds % 60;
		return `${minutes.toString().padStart(2, '0')}:${seconds
		  .toString()
		  .padStart(2, '0')}`;
	  };

	const handleStart = () => {
		setTime(initTime * 60);
		setIsRunning(true)
	};

	const handlePause = () => setIsRunning(false);
	const handleReset = () => {
		setIsRunning(false);
		setTime(0);
	};

	useEffect(() => {
		let interval: ReturnType<typeof setInterval> | null = null;
		if (isRunning) {
			interval = setInterval(() => {
				setTime((prevTime: number) => {
					if (prevTime <= 0) { 
						if (interval) clearInterval(interval);
						return 0;
					}
					return prevTime - 1
				});
			}, 1000);
		} else {
			if (interval) clearInterval(interval);
		}
		return () => {
			if (interval) clearInterval(interval);
		};
	}, [isRunning]);

    return (
        <div>
            <p>{formatTime(time)}</p>
			<div style={{ marginTop: '1rem' }}>
				<button onClick={handleStart}>Start</button>
				<button onClick={handlePause}>Pause</button>
				<button onClick={handleReset}>Reset</button>
			</div>
        </div>
    )
}