import React from 'react';
import * as S from './Contact.styled';

const Conctact = () => (
  <S.ContainerContact>
    <S.StyledFormContainer>
      <S.StyledForm>
        <p>Ask us enything! We`ll get back to you within 24 - 48 hours</p>
        <input type="text" placeholder='Name'/>
        <input type="email" placeholder='E-mail'/>
        <p>How can we help you?</p>
        <textarea name="message" cols="30" rows="10" placeholder='Your message'></textarea>

      </S.StyledForm>
    </S.StyledFormContainer>
    <S.StyledImage />
  </S.ContainerContact>
);

export default Conctact;
