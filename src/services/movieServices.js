const key = import.meta.env.VITE_TMDB_KEY;
const baseUrl = "https://api.themoviedb.org/3";

const endpoints = {
    popular: `${baseUrl}/movie/popular?api_key=${key}&language=pt-BR`,
    topRated: `${baseUrl}/movie/top_rated?api_key=${key}&language=pt-BR`,
    trending: `${baseUrl}/movie/popular?api_key=${key}&language=pt-BR&page=2`,
    comedy: `${baseUrl}/search/movie?api_key=${key}&language=pt-BR&query=comedy&page=1&include_adult=false`,
    upcoming: `${baseUrl}/movie/upcoming?api_key=${key}&language=pt-BR`,
};

export function createImgUrl(filename, size) {
    return `https://image.tmdb.org/t/p/${size}/${filename}`;
}

export default endpoints;
