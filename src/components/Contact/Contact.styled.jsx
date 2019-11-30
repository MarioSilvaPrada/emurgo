import styled from 'styled-components';
import ContactImage from '../../assets/photos/Contact_us.jpg';

export const ContainerContact = styled.div`
  display: flex;
  height: 39.5rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

export const StyledImage = styled.div`
  width: 50%;
  height: 100%;
  background: url(${ContactImage});
  background-size: cover;

  @media (max-width: 900px) {
    height: 35rem;
    width: 100%;
  }
`;

export const StyledFormContainer = styled.div`
  width: 50%;
  background: #f1f7fa;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    height: 35rem;
    width: 100%;
  }
`;

export const StyledForm = styled.form`
  width: 29.31rem;
  dispay: flex;
  flex-direction: column;

  p {
    margin: 0 0 1rem;
  }

  input,
  textarea {
    border: 1px solid #215f68;
    border-radius: 2px;
    width: 100%;
    padding-left: 1.5rem;
    font-size: .9rem;
    outline: none;
    box-sizing: border-box;
  }

  textarea {
    padding-top: 1rem;
    resize: none;
    margin-bottom: 2.25rem;
  }

  input {
    height: 3.38rem;
    margin-bottom: 2.25rem;
  }
`;
