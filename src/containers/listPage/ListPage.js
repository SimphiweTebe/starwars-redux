import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardItem from '../../components/cardItem/CardItem';
import GridItem from '../../components/gridItem/GridItem';
import HeroItem from './HeroItem';
import { fetchAllMovies } from '../../services/MovieService';

function ListPage() {

    const {data, pending, error} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(()=>{
        fetchAllMovies(dispatch);
    },[dispatch]);

    const renderHTML = ()=>{
        if(pending) return <p>loading...</p>
        if(error) return <p>error</p>
        if(data !== null){
            return (
                data.map((movie, index) => (
                    <CardItem key={index} movie={movie} id={index + 1}/>
                ))
            );
        }
    }

  return (
    <>
        <HeroItem />
        <GridItem>
            { renderHTML() }
        </GridItem>
    </>
  )
}

export default ListPage