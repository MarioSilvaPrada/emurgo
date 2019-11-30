import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 23.1rem;
  text-align: start;
  img {
    width: 100%;
    margin: 0 0 1.88rem;
  }
  .date {
    font-size: .9rem;
    color: #8c8c8c;
    margin-bottom: 1rem;
  }

  .content {
    font-size: 1.12rem;
    line-height: 1.75rem;
    margin: 0;
  }

  @media (max-width: 900px) {
    margin-bottom: 3rem;
  }
`;

const BlogDivison = ({ img, date, content }) => (
  <StyledContainer>
    <img src={img} alt='img' />
    <p className='date'>{date}</p>
    <p className='content'>{content}</p>
  </StyledContainer>
);

export default BlogDivison;
