/* eslint-disable default-param-last */
import axios from 'axios';

const GET_DATA_SUCCESS = 'persons/GET_DATA_SUCCESS';
const url = 'http://127.0.0.1:3001/v1/people';

const initialState = {};

const getData = (data) => ({
  type: GET_DATA_SUCCESS,
  payload: data,
});

export const getDataFromApi = () => async (dispatch) => {
  try {
    const res = await axios.get(url);
    dispatch(getData(res));
  } catch (error) {
    console.log(error);
  }
};

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return [action.payload];
    default:
      return state;
  }
};

export default personReducer;
