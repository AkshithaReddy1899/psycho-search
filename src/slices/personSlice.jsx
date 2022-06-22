/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_DATA = 'person/GET_DATA';
const url = 'http://127.0.0.1:3001/v1/people';

const getData = (data) => ({
  type: GET_DATA,
  payload: data,
});

// eslint-disable-next-line consistent-return
export const getDataFromApi = () => async (dispatch) => {
  try {
    await axios(url)
      .then((res) => {
        dispatch(getData(res.data));
      });
  } catch (err) {
    console.error(err.message);
  }
};

const personSlice = createSlice({
  name: 'person',
  initialState: {
    persons: [],
    status: null,
  },
  extraReducers: {
    [getDataFromApi.pending]: (state) => {
      state.status = 'loading';
    },
    [getDataFromApi.fullfilled]: (state, action) => {
      state.status = 'success';
      state.persons = action.payload;
    },
    [getDataFromApi.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default personSlice.reducer;
