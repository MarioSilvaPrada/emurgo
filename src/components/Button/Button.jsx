import React from 'react';
import * as S from './Button.styled';


const Button = (props) => (
    <S.StyledButton>
        {props.children}
    </S.StyledButton>
)

export default Button;