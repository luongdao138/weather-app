import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../../config';

export const getWeatherOfLocation = createAsyncThunk(
  'weather/search',
  async ({ woeid }) => {
    try {
      const { data } = await axios.get(`${baseUrl}/location/${woeid}`);
      return data;
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }
);

const initialState = {
  detail: {},
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    start: (state) => {
      state.loading = true;
    },
    finish: (state) => {
      state.loading = false;
    },
  },
  extraReducers: {
    [getWeatherOfLocation.pending]: (state) => {
      state.loading = true;
    },
    [getWeatherOfLocation.fulfilled]: (state, action) => {
      state.detail = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getWeatherOfLocation.rejected]: (state, action) => {
      state.loading = false;
      state.error = 'Cannot get the weather!';
    },
  },
});

export const { start, finish } = weatherSlice.actions;
export default weatherSlice.reducer;
