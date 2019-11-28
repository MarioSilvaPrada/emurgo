import styled from 'styled-components';
import HeaderBackground from '../../assets/photos/start_page.jpg';

export const StyledBackground = styled.div`
  background: url(${HeaderBackground});
  background-size: cover;
  height: 100vh;
  width: 100%;
`;
export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 7rem;
  position: absolute;
  left: 0;
  right: 0;
`;

export const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20rem;
  color: white;
  font-weight: bold;
  font-size: 1rem;

  a {
    text-decoration: none;
    color: white;
    cursor: pointer;
  }
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 7rem;
  height: 100%;
  width: 40rem;
  text-align: start;

  h1 {
    font-size: 3.8rem;
    color: white;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .byCompany,
  .testTask {
    font-size: 1.25rem;
    color: white;
    font-size: 20px;
  }

  .testTask {
    margin-bottom: 25px;
  }

  .byCompany {
    display: flex;
    align-items: center;
    margin-bottom: 45px;

    img {
      margin-left: 1rem;
    }
  }

  .header-btns {
    width: 100%;

    button:first-child {
      margin-right: 1.5rem;
    }
  }
`;
