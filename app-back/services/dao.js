// Retrieves data from TMDB
require("dotenv").config();
const { default: axios } = require("axios");

// Retrieve now playing movies
async function nowPlaying(page) {
  let pageReq = "";
  page == undefined ? (pageReq = "") : (pageReq = `?page=${page}`);
  try {
    const nowPlayingMovies = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing${pageReq}`,
      { headers: { "Authorization": `Bearer ${process.env.API_KEY}` } }
    );
    return nowPlayingMovies.data;
  } catch (error) {
    console.error(error);
  }
}

// Retrieve top rated movies
async function topRated(page) {
  let pageReq = "";
  page == undefined ? (pageReq = "") : (pageReq = `?page=${page}`);
  try {
    const topRatedMovies = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated${pageReq}`,
      { headers: { "Authorization": `Bearer ${process.env.API_KEY}` } }
    );
    return topRatedMovies.data;
  } catch (error) {
    console.error(error);
  }
}

// Retrieve popular movies
async function popular(page) {
  let pageReq = "";
  page == undefined ? (pageReq = "") : (pageReq = `?page=${page}`);
  try {
    const popularMovies = await axios.get(
      `https://api.themoviedb.org/3/movie/popular${pageReq}`,
      { headers: { "Authorization": `Bearer ${process.env.API_KEY}` } }
    );
    return popularMovies.data;
  } catch (error) {
    console.error(error);
  }
}

// Retrieve a movie detail
async function movieDetail(id) {
  try {
    const movie = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
      headers: { "Authorization": `Bearer ${process.env.API_KEY}` },
    });
    return movie.data;
  } catch (error) {
    console.error(error);
  }
}

// Search movie by title
async function searchMovie(query, page) {
  try {
    let pageReq = "";
    page == undefined ? (pageReq = "") : (pageReq = `?page=${page}`);
    const movieSearch = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&${pageReq}`,
      { headers: { "Authorization": `Bearer ${process.env.API_KEY}` } }
    );
    return movieSearch.data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { nowPlaying, topRated, popular, movieDetail, searchMovie };
