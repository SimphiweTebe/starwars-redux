import React from 'react'
import { formatDate } from '../../helpers/formatDate';
import styled from 'styled-components';
import Button from '../../components/buttonItem/Button';

const StyledHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px;
    background-color: rgba(0,0,0,.6);
    margin-top: 80px;

    h1{
        font-size: 3rem;
        font-weight: 500;
        color: #DBA90E;
    }
    h3{
        font-size: 1.6rem;
        font-weight: 400;
    }
`;

function HeaderSection({title, director, producer, release_date, description}) {
  return (
    <StyledHeader>
        <h1>{title}</h1>
        <h3>Producer: {producer}</h3>
        <h3>Director: {director}</h3>
        <h3>Release date: {formatDate(release_date)}</h3>
        <p dangerouslySetInnerHTML={{__html: description}} />
        <Button text="Back to list" url="/"/>
    </StyledHeader>
  )
}

export default HeaderSection