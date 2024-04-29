import React from 'react';
import { Route, Routes} from 'react-router-dom'

import HomePage from '../../pages/HomePage/HomePage';
import MoviePage from '../../pages/MoviePage/MoviePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/movies' element={<MoviesPage/>}/>
            <Route path='/movie/:id' element={<MoviePage/>}/>
        </Routes>
    );
};

export default AppRouter;