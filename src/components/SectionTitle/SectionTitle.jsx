import React from 'react';

import styled from 'styled-components';

const Title = styled.div`
    font-size: 1.5rem;
    color: #215F68;
    font-weight: bold;
`


const SectionTitle = ({title, style}) => (
    <Title style={style}>
        {title}
    </Title>
);

export default SectionTitle;