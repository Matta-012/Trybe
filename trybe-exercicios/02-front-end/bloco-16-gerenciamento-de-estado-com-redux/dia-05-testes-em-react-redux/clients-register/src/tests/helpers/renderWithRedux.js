import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from '../../reducers';

export default renderWithRedux = (
  component,
  { initialState = {}, store = createStore(rootReducers, initialState) },
) => ({
  ...render(
    <Provider store={ store }>
      {component}
    </Provider>,
  ),
  store,
});
