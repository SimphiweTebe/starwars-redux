import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllMovies } from '../services/MovieService';


function ListPage() {

    const {data, pending, error} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(()=>{
        fetchAllMovies(dispatch);
    },[dispatch])

  return (
    <div>ListPage</div>
  )
}

export default ListPage