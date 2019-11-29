import React from 'react';
import * as S from './Blog.styled';

import SectionTitle from '../SectionTitle/SectionTitle';
import BlogDivison from './BlogDivison/BlogDivison';

import Blog1 from '../../assets/photos/Blog_1.jpg';
import Blog2 from '../../assets/photos/Blog_2.jpg';
import Blog3 from '../../assets/photos/Blog_3.jpg';

const Blog = () => (
  <S.BlogContainer>
    <SectionTitle style={{ marginBottom: '1rem' }} title='Blog' />
    <S.BlogDescription>
      Check out below for our latest announcements, meetups, news stories and press releases
    </S.BlogDescription>
    <S.BlogLinkImages>
      <BlogDivison
        img={Blog1}
        date={'11 Nov 2019'}
        content='Metaps Plus and EMURGO Collaborate on Joint Launch of World’s First ADA CRYPTO CARD in South Korea'
      />
      <BlogDivison
        img={Blog2}
        date={'6 Nov 2019'}
        content='Regarding our relationship with EMURGO HK Limited'
      />
      <BlogDivison
        img={Blog3}
        date={'16 Oct 2019'}
        content='EMURGO to Hold Blockchain Hackathon in Partnership with Tokyo University of Science'
      />
    </S.BlogLinkImages>
  </S.BlogContainer>
);

export default Blog;
