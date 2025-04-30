import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100px;
`;

export const SwitchLabel = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin-bottom: 5px;
`;

export const SwitchInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span {
        background-color: #58538D;
    }

    &:checked + span::before {
        transform: translateX(26px);
    }
`;

export const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #FFE577;
    transition: 0.4s;
    border-radius: 34px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    &::before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: 0.4s;
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
`;

export const Tag = styled.p`
    width: 100px;
    font-size: 16px;
    text-align: center;
    margin: 0;
`;