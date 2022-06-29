/* eslint-disable default-param-last */
import axios from 'axios';

const GET_DATA_SUCCESS = 'persons/GET_DATA_SUCCESS';
const GET_DATA = 'persons/GET_DATA';
const GET_DATA_FAILURE = 'person/GET_DATA_FAILURE';
const url = 'http://127.0.0.1:3001/v1/people';

const initialState = {
  data: [],
  isLoading: false,
  hasError: false,
};

const getDataSuccess = (data) => ({
  type: GET_DATA_SUCCESS,
  payload: data,
});

const getData = () => ({
  type: GET_DATA,
});

const getDataFailure = () => ({
  type: GET_DATA_FAILURE,
});

export const getDataFromApi = () => async (dispatch) => {
  dispatch(getData());
  try {
    const res = await axios.get(url);
    dispatch(getDataSuccess(res));
  } catch (error) {
    dispatch(getDataFailure());
    console.log(error);
  }
};

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        data: [],
        isLoading: true,
        hasError: false,
      };
    case GET_DATA_SUCCESS:
      return {
        data: [action.payload],
        isLoading: false,
        hasError: false,
      };
    case GET_DATA_FAILURE:
      return {
        data: [],
        isLoading: true,
        hasError: true,
      };
    default:
      return state;
  }
};

export default personReducer;
