import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    width: 95%;
    max-width: 1200px;
    margin: auto;
`;

function Container({children}) {
  return (
    <StyledContainer>{children}</StyledContainer>
  )
}

export default Container