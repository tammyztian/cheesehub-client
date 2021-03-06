import { API_BASE_URL } from '../config';

export const fetchCheeses = () => (dispatch) => {
  dispatch(fetchCheesesRequest());
  fetch(`${API_BASE_URL}/api/cheeses`)
    .then(response => response.json())
    .then(cheeses => dispatch(fetchCheesesSuccess(cheeses)))
    .catch(error => dispatch(fetchCheesesError(error)));
};

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => ({
  type: FETCH_CHEESES_REQUEST,
  loading: true,
});

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesError = (cheeses) => ({
  type: FETCH_CHEESES_SUCCESS,
  loading: false,
  error: null,
  cheeses
})

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = (cheeses) => ({
  type: FETCH_CHEESES_ERROR,
  loading: false,
  error
})