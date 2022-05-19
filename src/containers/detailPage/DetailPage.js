import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovie} from '../../services/MovieService';
import Container from './Container';
import HeaderSection from './HeaderSection';

function DetailPage() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const state = useSelector(state => state.movies.details);

  useEffect(()=>{
    const loadData = async ()=> {
      try {
        await dispatch(fetchMovie(id, dispatch))
      } catch (error) {
        console.log(error)
      }
    }
    loadData();
  },[]);

  console.log(state);
  return (
    <Container>
      <HeaderSection 
        title={state?.title} 
        director={state?.director}
        producer={state?.producer}
        release_date={state?.release_date}
        description={state?.opening_crawl}
      />
    </Container>
  )
}

export default DetailPage