// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = import.meta.env.VITE_API_KEY;
// const API_KEY = 'd6340b0abd4acd7c9728b48e63ed5dd7';
const requests = {
  fetchTfending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};
export default requests;

// const API_KEY = 'd6340b0abd4acd7c9728b48e63ed5dd7';
// console.log(API_KEY);
// if (API_KEY) {
//   console.log("API Key:", API_KEY);
//   const requests = {
//     fetchTfending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//     fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//     fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//     fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//     fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//     fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//     fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//     fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
//     fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
//   };
// } else {
//   console.error("API Key is not defined!");
// }
// export default requests;


