import React from 'react';
import Container from '../../components/container/container';
import classes from './HomePage.module.css';

const HomePage = ()=>{
  return (
    <Container>
        <div className={classes.entryText}>
            Добрый вечер!<br/>
            Добро пожаловать на веб-приложение, для просмотра списка фильмов, их описания, фильтрации и поиска. 
            Приложение построено на основе TMDB Api и было спроектировано в качестве тестового задания для отбора на стажировку в VK на позицию React-разработчика. <br/>
            Для начала просмотра нажмите кнопку "Фильмы", которая находится в хедере.<br/><br/>
            Приятного просмотра!<br/>
            C уважением, Литвинец Даниил
        </div>
    </Container>
  );
}

export default HomePage;