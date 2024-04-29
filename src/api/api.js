import {$host, options, $images} from "./index";

export const getMovies = async(page) => {
    const {data} = await $host.get(`movie/top_rated?language=ru-RU&page=${page}`, options)
    return data
}

export const searchMovies = async(page, query) => {
    const {data} = await $host.get(`search/movie?query=${query}&include_adult=true&language=ru-RU&page=${page}`, options)
    return data
}

export const getMovie = async(id) => {
    const {data} = await $host.get(`movie/${id}?language=ru-RU`, options)
    return data
}

export const getBackdrops = async(id) =>{
    const {data} = await $host.get(`movie/${id}/images`, options)
    return data
}

export const getSimilar = async(id) =>{
    const {data} = await $host.get(`movie/${id}/similar?language=ru-RU&page=1`, options)
    return data
}
