import React from 'react'
import { formatDate } from '../../helpers/formatDate';
import styled from 'styled-components'
import Button from '../buttonItem/Button';

const StyledCard = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: rgba(0,0,0,.6);
    border-radius: 2px;

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
            font-size: 2.5rem;
        }
    }
`;

function CardItem({ movie, id }) {
    
  return (
    <StyledCard>
        <h4>{movie.title}</h4>
        <h5>{formatDate(movie.release_date)}</h5>
        <p dangerouslySetInnerHTML={{__html: movie.opening_crawl.slice(0,140) + '...'}}></p>
        <Button text="Read more" url={`/film/${id}`}/>
    </StyledCard>
  )
}

export default CardItem