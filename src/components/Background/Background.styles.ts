import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #FF8967;
`;

const BaseBlob = styled.div`
    position: absolute;
    filter: blur(50px);
`;

export const BlobOne = styled(BaseBlob)`
    top: 10%;
    left: 15%;
    background: linear gradient(135deg, #FFE577, #FD9C4F);
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%
`;

export const BlobTwo = styled(BaseBlob)`
    top: 40%;
    left: 60%;
    background: linear gradient(135deg, #FFE577, #FD9C4F);
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%
`;

export const BlobThree = styled(BaseBlob)`
    top: 40%;
    left: 30%;
    background: linear gradient(135deg, #FFE577, #FD9C4F);
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%
`;