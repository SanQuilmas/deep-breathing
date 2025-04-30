import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Ball = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: ${({ theme }) => theme.circleColor}; 
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: calc(50% - 100px);
    transform-origin: center;
    transition: background-color 0.3s ease;
`;

export const Text = styled(motion.span)`
    color: ${({ theme }) => theme.circleText};
    font-size: 16px;
    transition: color 0.3s ease;
`;
