import React from 'react';
import * as S from './Footer.styled';

import Logo from '../../assets/svg/EMURGOTEST-logo.svg';
// Social Media
import facebook from '../../assets/footer icons/fb.svg';
import linkedin from '../../assets/footer icons/linked in.svg';
import medium from '../../assets/footer icons/medium.svg';
import redit from '../../assets/footer icons/redit.svg';
import twitter from '../../assets/footer icons/twitter.svg';
import youtube from '../../assets/footer icons/youtube.svg';

const Footer = () => (
  <S.StyledContainer>
    <S.StyledRights>
      <img src={Logo} alt='logo' />
      <span>All rights reserved | EMURGOTEST</span>
    </S.StyledRights>
    <S.StyledMedia>
      <div className='menu'>
        <a href='#about'>About</a>
        <a href='#blog'>Blog</a>
        <a href='#contact'>Contact</a>
        <span>Eng</span>
      </div>
      <div className='media'>
        <img src={facebook} alt='media' />
        <img src={linkedin} alt='media' />
        <img src={medium} alt='media' />
        <img src={redit} alt='media' />
        <img src={twitter} alt='media' />
        <img src={youtube} alt='media' />
      </div>
    </S.StyledMedia>
  </S.StyledContainer>
);

export default Footer;
