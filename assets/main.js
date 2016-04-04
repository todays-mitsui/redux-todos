import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore }from 'redux';
import todoApp from './reducers';
import App from './components/App';

let store = createStore(todoApp);

import { addTodo, setVisibilityFilter } from './actions';
store.dispatch(addTodo('Hello,react!'));
store.dispatch(addTodo('Hello,redux!'));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.container')
);
