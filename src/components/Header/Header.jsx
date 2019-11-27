import React from 'react';
import Logo from '../../assets/svg/EMURGOTEST-logo.svg';
import WhiteLogo from '../../assets/svg/EMURGO-logo.svg';
import * as S from './Header.styled';

// Components
import Button from '../Button/Button';

const Header = () => (
  <S.StyledBackground>
    <S.StyledHeader>
      <img src={Logo} />
      <S.StyledMenu>
        <span>About</span>
        <span>Blog</span>
        <span>Contact</span>
        <span>Eng</span>
      </S.StyledMenu>
    </S.StyledHeader>
    <S.StyledHeaderContainer>
      <h1>EMURGO Building a Global Cardano</h1>
      <span className='testTask'>Test Task</span>
      <div className='byCompany'>
        <span>By</span>
        <img src={WhiteLogo} />
      </div>
      <div className='header-btns'>
        <Button>Learn More</Button>
        <Button>Watch the Video</Button>
      </div>
    </S.StyledHeaderContainer>
  </S.StyledBackground>
);

export default Header;
