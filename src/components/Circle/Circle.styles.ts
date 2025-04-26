import styled from "styled-components";

export const CircleDiv = styled.div`
    width: fit-content;
    aspect-ratio: 1 / 1;
    padding: 0.5rem;
    border-radius: 50%;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: rgba(255, 0, 0, 0.1);
        cursor: pointer;
        scale: 1.05;
    }
`;