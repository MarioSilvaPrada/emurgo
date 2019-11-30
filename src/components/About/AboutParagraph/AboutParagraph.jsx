import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  align-items: flex-start;

  h1, .content, .subtitle {
    margin: 0;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1.25rem;
    color: #353535;
  }

  .subtitle {
    color: #4a4a4a;
    margin-bottom: .5rem;
  }

  .content {
    color: #9b9b9b;
    text-align: start;
    line-height: 1.75rem;

    @media (max-width: 890px) {
     margin-bottom: 3rem;
    }
`;

const AboutParagraph = ({ title, subtitle, content }) => (
  <StyledParagraph>
    <h1>{title}</h1>
    <p className='subtitle'>{subtitle}</p>
    <p className='content'>{content}</p>
  </StyledParagraph>
);

export default AboutParagraph;
