import React from 'react';
import styled from "styled-components";

const StyledParagraph = styled.div`
    display: flex;
    flex-direction: column;
`


const AboutParagraph = () => (
    <StyledParagraph>
        <p>test</p>
        <p>test</p>
        <p>test</p>
    </StyledParagraph>
);

export default AboutParagraph;