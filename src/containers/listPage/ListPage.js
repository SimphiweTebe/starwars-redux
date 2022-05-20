import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardItem from '../../components/cardItem/CardItem';
import GridItem from '../../components/gridItem/GridItem';
import HeroItem from './HeroItem';
import { fetchAllMovies } from '../../services/MovieService';
import SortMovies from '../../components/sorterItem/SortMovies';
import LoaderItem from '../../components/loaderItem/LoaderItem';

function ListPage() {

    const {data, pending, error} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(()=>{
        fetchAllMovies(dispatch);
    },[dispatch]);

    const renderHTML = ()=>{
        if(pending) return <LoaderItem />
        if(error) return <p>error</p>
        if(data !== null){
            return (
                <GridItem>
                    {data.map((movie, index) => (
                        <CardItem key={index} movie={movie} id={index + 1}/>
                    ))}
                </GridItem>
            );
        }
    }

  return (
    <>
        <HeroItem />
        <SortMovies />
        { renderHTML() }
    </>
  )
}

export default ListPage