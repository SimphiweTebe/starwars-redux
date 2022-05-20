import React from 'react';
import Container from '../container/Container';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { sortMovieList } from '../../services/MovieService';

const StyledForm = styled.div`
  padding: 30px 0px;
  margin-bottom: 30px;
  display: flex;
  gap: 20px;
  align-items: center;
  width: 95%;
  max-width: 300px;

  select{
    flex: 1;
    padding: 5px 10px;
    border: none;
  }
`;

function SortMovies() {
  const {data} = useSelector(state => state.movies);
  const dispatch = useDispatch();
  
  const handleSorting = (e) => {
    const sort = e.target.value;
    const sortedFilms = [...data].sort((a, b) => a[sort].localeCompare(b[sort]));
    sortMovieList(sortedFilms, dispatch);
  }
  
  return (
    <Container>
      <StyledForm>
        <div>Sort movies by:</div>
        <select onChange={handleSorting}>
            <option value="release_date">Release date</option>
            <option value="title">Title</option>
        </select>
      </StyledForm>
    </Container>
  )
}

export default SortMovies