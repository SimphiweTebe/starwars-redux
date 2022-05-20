import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovie} from '../../services/MovieService';
import Container from './Container';
import HeaderSection from './HeaderSection';
import DetailGrid from './DetailGrid';

function DetailPage() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const { pending, error, details } = useSelector(state => state.movies);

  useEffect(()=>{
    fetchMovie(id, dispatch);
  },[id, dispatch]);

  const renderHTML = ()=>{
    if(pending){
      return <p>Loading...</p>
    }else if(error){
      return <p>Error</p>
    }
    return (
      <>
      <HeaderSection 
        title={details?.title} 
        director={details?.director}
        producer={details?.producer}
        release_date={details?.release_date}
        description={details?.opening_crawl}
      />
      {details?.characters && <DetailGrid content={details.characters} title="Characters" />}
      {details?.planets && <DetailGrid content={details?.planets} title="Planets" />}
      {details?.species && <DetailGrid content={details?.species} title="Species" />}
      {details?.starships && <DetailGrid content={details?.starships} title="Starships" />}
      {details?.vehicles && <DetailGrid content={details?.vehicles} title="Vehicles" />}
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