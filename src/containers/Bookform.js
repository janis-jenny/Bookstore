import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/index';

export const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.id === 'title') {
      setTitle(e.target.value);
    } else {
      setCategory(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: Math.floor(Math.random() * 1000) + 1,
      title,
      category,
    };

    dispatch(actions.createBookAction(book));

    setTitle('');
    setCategory(CATEGORIES[0]);
  };

  return (
    <form>
      <input onChange={handleChange} name="title" id="title" type="text" value={title} placeholder="Type the book title" />
      <select id="category" onChange={handleChange} value={category}>
        {CATEGORIES.map((x) => <option key={x}>{x}</option>)}
      </select>
      <button onClick={handleSubmit} type="submit">Submit</button>
    </form>
  );
};

export default BookForm;
