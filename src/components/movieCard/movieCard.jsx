import React from "react";
import classes from './movieCard.module.css';
import { NavLink } from "react-router-dom";

const MovieCard = ({movie, scale, ...props}) => {
    return (
        <NavLink to={`/movie/${movie.id}`} style={{'transform':`scale(${scale})`}} className={classes.card}>
            <img key={movie.id} loading="lazy" className={classes.poster} src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} srcset={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path} 1x, https://media.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path} 2x`} alt={movie.title}></img>
            <span className={classes.movieTitle} style={{'fontSize':2-movie.title.length/50+'vw'}}>{movie.title}</span>
            <span className={classes.movieVote}>{Math.round(movie.vote_average*10)}%</span>
        </NavLink>
    );
}
 
export default MovieCard;