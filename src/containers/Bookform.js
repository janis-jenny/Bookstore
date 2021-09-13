/* eslint-disable no-console */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/index';

export const arrayIds = [];
export const createUniqueId = () => {
  const someId = Math.floor(Math.random() * 1000);
  if (!arrayIds.includes(someId)) {
    arrayIds.push(someId);
    return someId;
  }
  return createUniqueId();
};

const categories = () => {
  const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const options = CATEGORIES.map((category) => (
    <option
      key={CATEGORIES.indexOf(category)}
      value={category}
    >
      {category}
    </option>
  ));
  return options;
};

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const options = categories();

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.id === 'title') {
      setTitle(e.target.value);
    } else {
      setCategory(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    console.log('dispatch1');
    console.log(dispatch);
    e.preventDefault();
    const book = {
      id: createUniqueId(),
      title,
      category,
    };

    console.log('dispatch2');
    console.log(book);
    dispatch(actions.createBookAction(book));

    setTitle('');
    setCategory('');
  };

  return (
    <form>
      <input onChange={handleChange} name="title" id="title" type="text" value={title} placeholder="Type the book title" />
      <select id="category" onChange={handleChange} value={category}>
        {options}
      </select>
      <button onClick={handleSubmit} type="submit">Submit</button>
    </form>
  );
};

export default BookForm;
