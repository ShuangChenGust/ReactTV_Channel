//take base url to make requests to the movie database
import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.themoviedb.org/3",
});

export default instance;
