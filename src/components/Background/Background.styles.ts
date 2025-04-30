import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.wrapperSolid};
    overflow: hidden;
    background: radial-gradient(circle 1300px at top right, ${({ theme }) => theme.wrapperGradientOne}, ${({ theme }) => theme.wrapperGradientTwo});
`;

const BaseBlob = styled.div`
    position: absolute;
    filter: blur(50px);
    z-index: 0;
`;

export const BlobOne = styled(BaseBlob)`
    top: 10%;
    left: 2%;
    background: linear-gradient(135deg, ${({ theme }) => theme.blobOne},${({ theme }) => theme.blobOne});
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    width: 450px;
    height: 300px;
`;

export const BlobTwo = styled(BaseBlob)`
    top: 40%;
    left: 80%;
    background: linear-gradient(135deg, ${({ theme }) => theme.blobTwo},${({ theme }) => theme.blobTwo});
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    width: 310px;
    height: 520px;
`;

export const BlobThree = styled(BaseBlob)`
    top: 70%;
    left: 30%;
    background: linear-gradient(135deg, ${({ theme }) => theme.blobThree}, ${({ theme }) => theme.blobThree});
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    width: 290px;
    height: 230px;
`;