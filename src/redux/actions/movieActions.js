import axios from "axios";

import {
  getAllMoviesReducer,
  getDetailsMovieReducer,
  getSearchMovieReducer,
} from "../reducers/movieReducer";

export const getAllMovies = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=907b5f77b10b2d71bf815146cfad03a7&language=en-US"
    );

    dispatch(getAllMoviesReducer(data));
  } catch (error) {
    throw error;
  }
};

export const getDetailsMovie = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=907b5f77b10b2d71bf815146cfad03a7&language=en-US`
    );

    dispatch(getDetailsMovieReducer(data));
  } catch (error) {
    throw error;
  }
};

export const getSearchMovie = (search) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=907b5f77b10b2d71bf815146cfad03a7&query=${search}`
    );

    dispatch(getSearchMovieReducer(data));
  } catch (error) {
    throw error;
  }
};
