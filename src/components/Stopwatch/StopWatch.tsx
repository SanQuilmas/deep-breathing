import { useContext, useEffect } from "react";
import { MainContext } from "../Window/Window";

export const Stopwatch = () => {
	const {time, setTime, breathing} = useContext(MainContext);
	const isRunning = breathing

	const formatTime = (timeInSeconds: number) => {
		const minutes = Math.floor(timeInSeconds / 60);
		const seconds = timeInSeconds % 60;
		return `${minutes.toString().padStart(2, '0')}:${seconds
		  .toString()
		  .padStart(2, '0')}`;
	  };

	useEffect(() => {
		let interval: ReturnType<typeof setInterval> | null = null;
		if (isRunning) {
			interval = setInterval(() => {
				setTime((prevTime: number | null) => {
					if (prevTime === null || prevTime <= 0) { 
						if (interval) clearInterval(interval);
						return 0;
					}
					return prevTime - 1;
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
            <p>{time ? formatTime(time) : formatTime(0)}</p>
        </div>
    )
}