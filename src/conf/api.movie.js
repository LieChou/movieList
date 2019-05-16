import * as axios from 'axios';

const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/4'
})

apiMovie.interceptors.request.use(req => {
    req.headers['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjYwYzJhYTY4ZDg3ZWQ2ZjhmMzhkMzllMDdiMzJmYyIsInN1YiI6IjVjZDE1MjU3YzNhMzY4MzY5N2RkMjRiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v6D_r3gs29B_pZRmai2TNUuKhTD1URvdUOll5xaEJ-E'
    return req;
})

export default apiMovie;

export const apiMovieMap = (m) => ({
    img: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
    title: m.title,
    details: `${m.release_date} | ${m.vote_average}/10 (${m.vote_count})`,
    description: m.overview,
})