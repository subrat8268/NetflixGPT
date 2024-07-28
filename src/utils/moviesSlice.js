import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    }
  },
});

export const { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addTrailerVideo } = moviesSlice.actions;

export default moviesSlice.reducer;
