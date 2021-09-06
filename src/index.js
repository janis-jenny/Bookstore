import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import reducer from './reducers/books';

const arrayIds = [];
const createUniqueId = () => {
  const someId = Math.floor(Math.random() * 1000);
  if (!arrayIds.includes(someId)) {
    arrayIds.push(someId);
    return someId;
  }
  return createUniqueId();
};

const firstState = {
  books: [{
    id: createUniqueId(),
    title: 'Game of Thrones',
    category: 'Action',
  },
  {
    id: createUniqueId(),
    title: 'Dracula',
    category: 'Horror',
  },
  {
    id: createUniqueId(),
    title: 'The Old Guard',
    category: 'Sci-Fi',
  },
  ],
};

const store = createStore(reducer, firstState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
