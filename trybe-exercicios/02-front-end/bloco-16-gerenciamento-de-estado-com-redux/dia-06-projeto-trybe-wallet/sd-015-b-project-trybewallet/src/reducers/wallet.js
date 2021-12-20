import {
  REQUEST_API,
  REQUEST_SUCCESS,
  FAILED_REQUEST,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  EDITING_EXPENSE,
  SUBMIT_EDITED_EXPENSE,
} from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [],
  expenses: [],
  isFetching: false,
  isEditing: false,
  idToEdit: 0,
  error: '',
};

function walletReducer(state = initialState, action) {
  switch (action.type) {
  case REQUEST_API:
    return { ...state, isFetching: true };
  case REQUEST_SUCCESS: {
    const currencyKeys = Object.keys(action.payload)
      .filter((currency) => currency !== 'USDT' && currency !== 'DOGE');
    return { ...state, currencies: [...currencyKeys], isFetching: false };
  }
  case FAILED_REQUEST:
    return { ...state, error: action.payload, isFetching: false };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { id: state.expenses.length, ...action.payload },
      ],
      isFetching: false,
    };
  case REMOVE_EXPENSE:
    return { ...state, expenses: [...action.payload] };
  case EDITING_EXPENSE:
    return {
      ...state,
      isEditing: !state.isEditing,
      id: action.payload,
    };
  case SUBMIT_EDITED_EXPENSE: {
    const expenses = [...state.expenses];
    const editedExpense = expenses.find(({ id }) => state.idToEdit === id);
    // Copia o valor do payload para o objeto editedExpense, como a referência
    // é a mesma no array expenses, não é necessário fazer mais nenhuma alteração no código
    // e já temos a sua respectiva posição do objeto no array com as informações atualizadas.
    Object.assign(editedExpense, action.payload);
    return {
      ...state,
      expenses,
      isEditing: !state.isEditing,
      idToEdit: 0,
    };
  }
  default:
    return state;
  }
}

export default walletReducer;
