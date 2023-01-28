export const fetcher = (...args) => fetch(...args).then((res) => res.json());

const api_key = "6e1eb12ab3735cf3feb3ab8c6dc7b200";
const tmdEndPoint = "https://api.themoviedb.org/3/movie";
const tmdEndPointSearch = "https://api.themoviedb.org/3/search/movie";

export const tmdbAPI = {
    getMovieList: (type, page = 1) =>
        `${tmdEndPoint}/${type}?api_key=${api_key}&page=${page}`,
    getMovieDetail: (movieId) => `${tmdEndPoint}/${movieId}?api_key=${api_key}`,
    getMovieMeta: (type, movieId) =>
        `${tmdEndPoint}/${movieId}/${type}?api_key=${api_key}`,
    getMovieSearch: (query, page) =>
        `${tmdEndPointSearch}?api_key=${api_key}&query=${query}&page=${page}`,

    imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
    imageW500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
};
