import { easeInOut } from "motion";
import * as motion from "motion/react-client";
import { useEffect, useState, useContext } from 'react';
import { Stopwatch } from '../Stopwatch/StopWatch';
import { MainContext } from "../Window/Window";
import { Ball, Text } from "./Circle.styles";

export const Circle = () => {
    
	const {setTime, initTime} = useContext(MainContext);
    const {breathing, setBreathing} = useContext(MainContext);
    const {pace, theme} = useContext(MainContext);
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [moved, setMoved] = useState(false);
    const [pause, setPause] = useState(false);
    const [reset, setReset] = useState(false);

    const handleMouseEnter = () => {
        if (pace && initTime && !clicked) {
            setHovered(true);
        }
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };


    //TODO: Fix click behavior
    const handleClick = () => {
        if (breathing) {
            setPause(true);
            setBreathing(false);
        } else {
            setClicked(true);
            setTime((initTime ?? 0) * 60);
            setHovered(false);
        }
    };

    useEffect(() => {
        if (clicked && !moved) {
            setMoved(true);
        }
    }, [clicked, moved]);

    useEffect(() => {
        if (clicked && moved) {
            const timer = setTimeout(() => {
                setBreathing(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [clicked, moved]);

    useEffect(() => {
        if (breathing) {
            const timer = setTimeout(() => {
                setBreathing(false);
                setClicked(false);
                setMoved(false);
                setPause(false);
                setReset(true);
            }, ((initTime ?? 0) * 60) * 1000);
            return () => clearTimeout(timer);
        }
    }, [breathing]);

    let animation;
    let transition;

    if (reset) {
        animation = { scale: 1, y: "0%" };
        transition = { duration: 1, ease: easeInOut };
        setTimeout(() => setReset(false), 1000);
    } else if (pause) {
        animation = { scale: 1.7, y: "-50%" };
        transition = { duration: 0.5, ease: easeInOut };
    } else if (breathing) {
        animation = { scale: [2, 1.7, 2], y: "-50%" };
        transition = {
            duration: pace,
            ease: easeInOut,
            repeat: Infinity,
            repeatType: "mirror"
        };
    } else if (clicked && !breathing) {
        animation = { scale: 2, y: "-50%" };
        transition = { duration: 1, ease: easeInOut };
    } else {
        animation = { scale: [1, 1.1, 1], y: "0%" };
        transition = {
            duration: pace ?? 4,
            ease: easeInOut,
            repeat: Infinity,
            repeatType: "mirror"
        };
    }

    console.log(theme);

    return (
        <Ball
            initial={{ scale: 1, y: "0%" }}
            animate={animation}
            transition={transition}
            themeColor={theme.circleColor}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            {hovered && (
                <Text
                    themeColor={theme.circleText}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Stopwatch />
                </Text>
            )}
            
            {clicked ? <Stopwatch/> : ''}

        </Ball>
    );
};