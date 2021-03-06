import React from 'react';
import styled from 'styled-components';

const StyledGrid = styled.section`
    position: relative;
    width: 95%;
    max-width: 1200px;
    margin: 0 auto 80px;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

function GridItem({ children }) {
  return (
    <StyledGrid>{children}</StyledGrid>
  )
}

export default GridItem