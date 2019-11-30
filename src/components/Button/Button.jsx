import React from 'react';
import * as S from './Button.styled';

const Button = (props) => {
  return <S.StyledButton {...props}>{props.children}</S.StyledButton>;
};

export default Button;
