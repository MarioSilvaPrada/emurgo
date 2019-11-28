import React from 'react';
import * as S from './Collaborators.styled';

import Cardano from '../../assets/collaborators logo/Cardano.png';
import Emurgo from '../../assets/collaborators logo/EMURGO.png';
import inputOutput from '../../assets/collaborators logo/input-output.png';
import vacumlabs from '../../assets/collaborators logo/vacumlabs.png';

import SectionTitle from '../SectionTitle/SectionTitle';

const Collaborators = () => (
  <div>
    <S.MainImage />
    <S.CollaboratorsContainer>
      <SectionTitle style={{marginTop: '2.8rem'}} title='Our collaborators' />
      <S.CollaboratorsLogos>
        <img src={Cardano} alt='colLogo' />
        <img src={Emurgo} alt='colLogo' />
        <img src={inputOutput} alt='colLogo' />
        <img src={vacumlabs} alt='colLogo' />
      </S.CollaboratorsLogos>
    </S.CollaboratorsContainer>
  </div>
);

export default Collaborators;
