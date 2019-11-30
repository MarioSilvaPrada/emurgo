import styled from 'styled-components';
import Developer from '../../assets/photos/Developer.jpg';

export const MainImage = styled.div`
  width: 100%;
  height: 37.5rem;
  background: url(${Developer});
  background-size: cover;
`;

export const CollaboratorsContainer = styled.div`
  width: 100%;
  background: #f1f7fa;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CollaboratorsLogos = styled.div`
  width: 60.6rem;
  margin: 0 auto 4.25rem;
  display: flex;
  justify-content: space-between;

  img {
    width: 12.5rem;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    align-items: center;

    img {
      margin-bottom: 3rem;

      :last-child {
        margin-bottom: 0;
      }
    }
  }
`;
