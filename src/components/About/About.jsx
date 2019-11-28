import React from 'react';
import * as S from './About.styled';
import Fast from '../../assets/svg/Fast.svg';
import Secure from '../../assets/svg/Secure.svg';
import Simple from '../../assets/svg/Simple.svg';

import AboutParagraph from './AboutParagraph/AboutParagraph';
import SectionTitle from '../SectionTitle/SectionTitle';

const About = () => {
  let content = [
    {
      title: 'Secure',
      subtitle: 'Our top priority',
      content:
        'High-quality code, thoroughly tested, security audited and more to make sure that Yoroi works flawlessly. Private keys are encrypted and never shared with our servers or third party providers. In order to preserve your privacy, Yoroi wallet does not even implement analytics.',
      img: Fast,
    },
    {
      title: 'Fast',
      subtitle: 'Our innovation',
      content:
        'Yoroi is a light wallet for Cardano. There is no need to download the blockchain when you open the wallet. So you are ready to send and receive transactions right away.',
      img: Secure,
    },
    {
      title: 'Simple',
      subtitle: 'Our passion',
      content:
        'We believe that software should have a simple structure and a beautiful user interface. Yoroi has been carefully designed and constructed to offer a great user experience.',
      img: Simple,
    }
  ];

  return (
    <S.AboutContainer id='about'>
      <SectionTitle style={{ marginBottom: '3.13rem' }} title='About' />
      {content.map(
        (content, i) =>
          // if index is even place image on the right otherwise place it on the left
          i % 2 === 0 ? (
            <S.StyledDivision>
              <AboutParagraph
                title={content.title}
                subtitle={content.subtitle}
                content={content.content}
              />
              <img src={content.img} alt='imageAbout' />
            </S.StyledDivision>
          ) : (
            <S.StyledDivision>
              <img src={content.img} alt='imageAbout' />

              <AboutParagraph
                title={content.title}
                subtitle={content.subtitle}
                content={content.content}
              />
            </S.StyledDivision>
          ),
      )}
    </S.AboutContainer>
  );
};

export default About;
