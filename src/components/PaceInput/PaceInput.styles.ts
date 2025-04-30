import styled from "styled-components";

export const Menu = styled.div`
    position: relative;
    display: inline-block;
    width: 120px;
    height: 26px;
    padding: 8px;
    font-size: 16px;
    text-align: center;
    border: 1px solid white;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.paceInputColor};
`;

export const OptionList = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.paceMenuColor};
    text-align: center;
    border: 1px solid white;
    border-radius: 10px;
    list-style: none;
`;

export const OptionItem = styled.li`
    width: 100%;
    padding: 8px 0px;
    background-color: ${({ theme }) => theme.paceOptionColor};
    color: ${({ theme }) => theme.paceOptionText};
    border-radius: 10px;

    &:hover {
        background-color: ${({ theme }) => theme.paceHoverColor};
        color: ${({ theme }) => theme.paceHoverText};
        font-weight: bold;
    }
`;