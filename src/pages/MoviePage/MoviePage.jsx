import React, { useEffect, useState } from 'react';
import Container from '../../components/container/container';
import classes from './MoviePage.module.css';
import MovieCard from '../../components/movieCard/movieCard';
import { useParams } from 'react-router-dom';
import { getMovie , getBackdrops , getSimilar} from '../../api/api';
import PhotoView from '../../components/photoView/photoView';
import Loading from '../../components/loading/loading';

const MoviePage = ()=>{
    const {id} = useParams()
    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState({})
    const [backdrops, setBackdrops] = useState([])
    const [similar, setSimilar] = useState([])

    useEffect(()=>{
        setLoading(true)
        async function getData(){
            try{
                let tmpMovie = await getMovie(id)
                let tmpBackdrops = await getBackdrops(id)
                let tmpSimilar = await getSimilar(id)
                setMovie(tmpMovie)
                setBackdrops(tmpBackdrops.backdrops)
                setSimilar(tmpSimilar.results.slice(0,5))
                setLoading(false)
            } catch {
                alert("Что-то пошло не так с получением ресурсов, проверте ваше интернет соединение и повторите попытку! Если у вас включен VPN - попробуйте изменить его или отключить, если отключен - попробуйте с включить.")
            }
        }
        getData()
       
    },[id])

    return (
        <Container>
            <Loading loading={loading}>
                <span className={classes.movieTitle}>{movie.title}</span>
                <div className={classes.movieRow} style={{'backgroundImage':`url(https://media.themoviedb.org/t/p/original/${movie.backdrop_path})`,'backgroundSize':'cover'}}>
                    <img loading="lazy" className={classes.poster} src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} srcSet={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path} 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path} 2x`} alt={movie.title}></img>
                    <div className={classes.movieDetails}>                
                        <div className={classes.movieOverview}>
                            {movie.overview}
                        </div>
                        <div className={classes.movieData}>
                            Средняя оценка: {movie.vote_average} <br/>
                            Дата выхода: {movie.release_date} <br/>
                            Продолжительность: {movie.runtime} мин <br/>
                            Жанры: {movie.genres && movie.genres.map(genre=>genre.name+" ")} <br/>
                            Страна: {movie.origin_country && movie.origin_country.map(country=>country+" ")}
                        </div>
                    </div>
                </div>
                <PhotoView photos = {backdrops}/>
                <br/>
                <h1>Похожие фильмы:</h1>
                <div className={classes.similar}>
                    {
                        similar && similar.map(movie=>
                            <MovieCard scale={0.8} key={movie.id} movie = {movie}/>
                        )
                    }
                </div>
            </Loading>
        </Container>
    );
}

export default MoviePage;