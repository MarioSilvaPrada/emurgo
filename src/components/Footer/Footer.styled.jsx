import styled from 'styled-components';

export const StyledContainer = styled.div`
  height: 11.6rem;
  background: linear-gradient(to right, #0c4146, #48a1b0);
  display: flex;
  justify-content: space-between;
  padding: 3.2rem 9.63rem;
  box-sizing: border-box;
`;

export const StyledRights = styled.div`
  color: white;
  font-size: .8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledMedia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .menu {
    a, span {
      margin-left: 3.13rem;
      font-size: .9rem;
      font-weight: bold;
      color: white;
      cursor: pointer;
      text-decoration: none;
    }
  }

  .media {
    img {
      margin-left: .9rem;
      width: 1.5rem;
      cursor: pointer;
    }
  }
`;
