import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovie} from '../../services/MovieService';
import Container from '../../components/container/Container';
import HeaderSection from './HeaderSection';
import DetailGrid from './DetailGrid';
import LoaderItem from '../../components/loaderItem/LoaderItem';

function DetailPage() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const { pending, error, selected_movie } = useSelector(state => state.movies);

  useEffect(()=>{
    fetchMovie(id, dispatch);
    window.scrollTo(0,0);
  },[id, dispatch]);

  const renderHTML = ()=>{
    if(pending || selected_movie === null){
      return <LoaderItem />
    }else if(error){
      return <p>Error</p>
    }
    
    return (
      <>
      <HeaderSection 
        title={selected_movie?.title} 
        director={selected_movie?.director}
        producer={selected_movie?.producer}
        release_date={selected_movie?.release_date}
        description={selected_movie?.opening_crawl}
      />
      {selected_movie?.characters && <DetailGrid content={selected_movie.characters} title="Characters" />}
      {selected_movie?.planets && <DetailGrid content={selected_movie?.planets} title="Planets" />}
      {selected_movie?.species && <DetailGrid content={selected_movie?.species} title="Species" />}
      {selected_movie?.starships && <DetailGrid content={selected_movie?.starships} title="Starships" />}
      {selected_movie?.vehicles && <DetailGrid content={selected_movie?.vehicles} title="Vehicles" />}
      </>
    )
  }

  return (
    <Container>
      { renderHTML() }
    </Container>
  )
}

export default DetailPage