import { easeInOut } from "motion";
import * as motion from "motion/react-client";
import { useState, useEffect } from 'react';

export const Circle = ({ paceValidation, timeValidation }) => {

    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [breathing, setBreathing] = useState(false);
    const [moved, setMoved] = useState(false);
    const [pause, setPause] = useState(false);
    const [reset, setReset] = useState(false);

    const handleMouseEnter = () => {
        if (paceValidation && timeValidation && !clicked) {
            setHovered(true);
        }
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const handleClick = () => {
        if (breathing) {
            // Si está respirando y se hace clic, detener la respiración
            setPause(true);
            setBreathing(false);
        } else {
            setClicked(true);
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
            }, 5000);
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
            duration: 6,
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
            duration: 4,
            ease: easeInOut,
            repeat: Infinity,
            repeatType: "mirror"
        };
    }

    return (
        <motion.div
            initial={{ scale: 1, y: "0%" }}
            animate={animation}
            transition={transition}
            style={ball}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            {hovered && (
                <motion.span
                    style={textStyle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Begin
                </motion.span>
            )}
        </motion.div>
    );
};

const ball = {
    width: 200,
    height: 200,
    backgroundColor: "#dd00ee",
    borderRadius: "50%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: 'calc(50% - 100px)',
    transformOrigin: 'center',
};

const textStyle = {
    color: '#ffffff',
    fontSize: '16px',
};
