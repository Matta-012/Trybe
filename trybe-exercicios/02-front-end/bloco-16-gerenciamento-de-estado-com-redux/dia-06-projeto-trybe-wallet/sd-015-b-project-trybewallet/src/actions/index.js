// Coloque aqui suas actions
import currencyAPI from '../helpers/currencyAPI';

export const LOGIN = 'LOGIN';
export const REQUEST_API = 'REQUEST_API';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const EDITING_EXPENSE = 'EDIT_EXPENSE';
export const SUBMIT_EDITED_EXPENSE = 'SUBMIT_EDITED_EXPENSE';

export const loginAction = (payload) => ({ type: LOGIN, payload });

export const addExpense = (payload) => ({ type: ADD_EXPENSE, payload });

export const editingExpense = (payload) => ({ type: EDITING_EXPENSE, payload });

export const removeExpense = (payload) => ({ type: REMOVE_EXPENSE, payload });

export const submitEditedExpense = (payload) => ({
  type: SUBMIT_EDITED_EXPENSE,
  payload,
});

export const requestAPI = () => ({ type: REQUEST_API });

export const requestSuccess = (payload) => ({
  type: REQUEST_SUCCESS,
  payload,
});

export const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  payload: error.message,
});

export function fetchAPI() {
  return (dispatch) => {
    dispatch(requestAPI());
    return currencyAPI()
      .then((json) => {
        dispatch(requestSuccess(json));
      })
      .catch((error) => dispatch(failedRequest(error)));
  };
}
