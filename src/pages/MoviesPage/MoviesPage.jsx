import React, { useEffect, useState } from 'react';
import Container from '../../components/container/container';
import {getMovies, searchMovies} from '../../api/api';
import classes from './MoviesPage.module.css';
import Paginator from '../../components/paginator/paginator';
import MovieCard from '../../components/movieCard/movieCard';
import Loading from '../../components/loading/loading';

const MoviesPage = ()=>{
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setLoading(true)
        getData()
    },[page])

    async function getData(){
        try{
            if(query!=""){
                setPage(1)
                let tempMovies = await searchMovies(page, query)
                setMovies(tempMovies)
            }
            else{
                let tempMovies = await getMovies(page)
                setMovies(tempMovies)
            }
            setLoading(false)
        } catch {
            alert("Что-то пошло не так с получением ресурсов, проверте ваше интернет соединение и повторите попытку! Если у вас включен VPN - попробуйте изменить его или отключить, если отключен - попробуйте с включить.")
        }
    }


    return (
        <Container>
            <span className={classes.pageTitle}>Фильмы</span>
            <input type="text" value={query} onKeyDown={(e)=>e.key=="Enter"?getData():null} onChange={(e)=>{setQuery(e.target.value)}} className={classes.search} placeholder="Поиск..."/>
            <Loading loading={loading}>
                {
                    movies && movies.results && movies.results.length > 5?
                        <Paginator page={page} capacity={movies.total_pages} setPage={(p)=>setPage(p)}/>
                    :
                    null
                }
                {
                    movies && movies.results && movies.results.length != 0?
                    <div className={classes.movieGrid}>
                        {
                            movies.results && movies.results.map(movie=>
                                <MovieCard key={movie.id} movie = {movie}/>
                            )
                        }
                    </div>
                    :
                    <div>
                        Извините, ничего не найдено =(
                    </div>
                }
                <Paginator page={page} capacity={movies.total_pages} setPage={(p)=>setPage(p)}/>
            </Loading>
        </Container>
    );
}

export default MoviesPage;