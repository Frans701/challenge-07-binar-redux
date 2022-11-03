import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  movie: null,
  searchMovieList: [],
  token: localStorage.getItem("token"),
};

const movieSlicer = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getAllMoviesReducer: (state, action) => {
      state.movies = action.payload;
    },
    getDetailsMovieReducer: (state, action) => {
      state.movie = action.payload;
    },
    getSearchMovieReducer: (state, action) => {
      state.searchMovieList = action.payload;
    },
  },
});

export const {
  getAllMoviesReducer,
  getDetailsMovieReducer,
  getSearchMovieReducer,
} = movieSlicer.actions;

export default movieSlicer.reducer;
