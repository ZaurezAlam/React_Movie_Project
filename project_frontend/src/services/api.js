const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const Response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await Response.json()
    return data.results
};

export const searchMovies = async (query) => {
    const Response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await Response.json()
    return data.results
};