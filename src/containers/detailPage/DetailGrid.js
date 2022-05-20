import React from 'react';
import styled from 'styled-components';

const StyledDetails = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px;
    background-color: rgba(0,0,0,.6);
    margin-top: 1rem;

    .grid{
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        li{
            min-width: 200px;
        }

        a{
            margin-top: 30px;
        }
    }

    h4{
        color: #DBA90E;
        font-size:  1.7rem;
    }
`;

function DetailGrid({content, title}) {
  return (
   <StyledDetails>
       <h4>{title}</h4>
       <ul className="grid">
        {
            content.map(item => <li key={item.name}>{item.name}</li>)
        }
       </ul>
   </StyledDetails>
  )
}

export default DetailGrid