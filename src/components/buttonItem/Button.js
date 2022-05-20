import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.div`
    
      a{
        color: #000;
        padding: 6px 10px;
        background: #DBA90E;
        max-width: 200px;
        text-align: center;
        border-radius: 30px;
        display: block;
        margin-top: 30px;
      }
`

function Button({url, text}) {
  return (
    <StyledButton >
        <Link to={url}>{text}</Link>
    </StyledButton>
  )
}

export default Button