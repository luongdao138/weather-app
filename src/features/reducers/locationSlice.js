import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../../config';

export const searchLocation = createAsyncThunk(
  'location/search',
  async ({ query }, { getState }) => {
    try {
      const { data } = await axios.get(
        `${baseUrl}/location/search/?query=${query}`,
        {}
      );
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

const initialState = {
  list: [],
  loading: false,
  error: null,
};

const locationSlice = createSlice({
  initialState,
  reducers: {
    reset: (state) => {
      state.list = [];
    },
  },
  extraReducers: {
    [searchLocation.pending]: (state) => {
      state.loading = true;
    },
    [searchLocation.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.list = payload;
      state.error = null;
    },
    [searchLocation.rejected]: (state) => {
      state.loading = false;
      state.error = 'Can not search! Please try again!';
    },
  },
  name: 'location',
});

export const { reset } = locationSlice.actions;
export default locationSlice.reducer;
