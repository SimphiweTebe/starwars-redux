import React from 'react'
import { formatDate } from '../../helpers/formatDate';
import styled from 'styled-components'

const StyledCard = styled.div`
    padding: 10px;

    h4{
        font-size: 1.8rem;
        margin-bottom: 5px;
    }
    h5{
        font-size: 1.4rem;
        font-weight: 500;
        margin-bottom: 20px;
    }

    @media screen and (min-width: 720px){
        h4{
            font-size: 3rem;
        }
    }
`;

function CardItem({ movie, id }) {
    console.log(id);
  return (
    <StyledCard>
        <h4>{movie.title}</h4>
        <h5>{formatDate(movie.release_date)}</h5>
        <p dangerouslySetInnerHTML={{__html: movie.opening_crawl.slice(0,150) + '...'}}></p>
    </StyledCard>
  )
}

export default CardItem