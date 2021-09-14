import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers/index';

const firstState = {
  books: [{
    id: Math.floor(Math.random() * 1000) + 1,
    title: 'Game of Thrones',
    category: 'Action',
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    title: 'Dracula',
    category: 'Horror',
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    title: 'The Old Guard',
    category: 'Sci-Fi',
  },
  ],
  filter: 'All',
};

const store = createStore(rootReducer, firstState);

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
