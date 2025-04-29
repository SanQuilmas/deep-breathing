import styled from "styled-components";

export const Menu = styled.div`
    position: relative;
    width: 120px;
    padding: 8px;
    font-size: 16px;
    text-align: center;
    border-radius: 10px;
    background-color: #FD9C4F;
`;

export const OptionList = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #FFE577;
    text-align: center;
    border-radius: 10px;
    list-style: none;
`;

export const OptionItem = styled.li`
    width: 100%;
    padding: 8px 0px;
    background-color: #FFE577;
    color: black;
    border-radius: 10px;

    &:hover {
        background-color: #FFDC4A;
        color: white;
        font-weight: bold;
    }
`;