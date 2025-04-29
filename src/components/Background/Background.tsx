import React from 'react';
import { Wrapper, BlobOne, BlobTwo, BlobThree } from "./Background.styles";

interface BackgroundProps {
    children: React.ReactNode;
}

export const Background: React.FC<BackgroundProps> = ({ children }) => {
    return (
        <Wrapper>
            <BlobOne />
            <BlobTwo />
            <BlobThree />
            {children}
        </Wrapper>
    );
};
