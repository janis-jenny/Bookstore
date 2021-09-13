/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import reducerBooks from './reducers/books';
import { createUniqueId } from './containers/Bookform';

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

const store = createStore(reducerBooks, firstState);

const testRender = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

store.subscribe(testRender);

testRender();
reportWebVitals();
