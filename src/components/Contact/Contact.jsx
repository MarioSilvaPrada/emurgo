import React from 'react';
import * as S from './Contact.styled';

import Button from '../Button/Button';
import SectionTitle from '../SectionTitle/SectionTitle';

const Conctact = () => (
  <div id='contact'>
    <SectionTitle title='Contact us' style={{ marginBottom: '3.1rem' }} />
    <S.ContainerContact>
      <S.StyledFormContainer>
        <S.StyledForm>
          <p>Ask us enything! We`ll get back to you within 24 - 48 hours</p>
          <input type='text' placeholder='Name' />
          <input type='email' placeholder='E-mail' />
          <p>How can we help you?</p>
          <textarea name='message' cols='30' rows='10' placeholder='Your message' />
          <Button blue>Learn More</Button>
        </S.StyledForm>
      </S.StyledFormContainer>
      <S.StyledImage />
    </S.ContainerContact>
  </div>
);

export default Conctact;
