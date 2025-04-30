import styled from "styled-components";

export const TimeInput = styled.input`
    position: relative;
    width: 200px;
    padding: 8px;
    font-size: 36px;
    font-weight: 300;
    border: 1px solid white;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.timeInputColor};
    outline: none;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

    &::placeholder {
        color: rgba(255, 255, 255, 0.5);
        font-weight: 200;
        text-align: center;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    -moz-appearance: textfield;
`;
