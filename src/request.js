//  APIKEY = "9c401fbc9360466af4012dcb7e20582e";
const API_KEY = "9c401fbc9360466af4012dcb7e20582e";
//

//use request to get Movies information
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflexOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=20749`,
  fetchDocumentarie: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
