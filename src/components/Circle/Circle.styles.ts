import styled from "styled-components";

export const CircleDiv = styled.div`
    width: fit-content;
    aspect-ratio: 1 / 1;

    border-radius: 50%;
    border: 1px solid red;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: rgba(255, 0, 0, 0.1);
        cursor: pointer;
        scale: 1.05;
    }
`;