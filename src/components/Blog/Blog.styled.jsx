import styled from 'styled-components';

export const BlogContainer = styled.div`margin: 3.13rem 0 6.25rem;`;

export const BlogDescription = styled.div`
  font-size: 1.12rem;
  width: 26.8rem;
  margin: 0 auto 2.4rem;
  color: #1d1e21;
`;

export const BlogLinkImages = styled.div`
  width: 73.13rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;
