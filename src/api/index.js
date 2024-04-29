import axios from "axios";

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDQzNzMwMWNlYjQ5MDYzZGJiYTU2NzZhYmY3YWRiOCIsInN1YiI6IjY2MmU2NmRlMzU4MTFkMDEyOGU4NjhlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ay_IMVo3g72TYJgLZsbj0ecsuu37XplO9vTQ5T3gh18'
    }
  };

const base ='https://api.themoviedb.org/3/'

const img = 'https://media.themoviedb.org/t/p/original/'

const $host = axios.create({
    baseURL: base
})

const $images = axios.create({
    baseURL: img
})

export {
    $host, $images, options
}