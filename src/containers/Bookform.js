import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/index';
import * as formStyles from '../style/BookForm.module.css';
import { updateProgress } from '../style/Book.module.css';

const {
  horizontalRule, header, input, addTitle, addTitleBtn, form,
} = formStyles;

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
    <div className={form}>
      <hr className={horizontalRule} />
      <h1 className={header}>ADD NEW BOOK</h1>
      <form>
        <input className={`${input} ${addTitle}`} onChange={handleChange} name="title" id="title" type="text" value={title} placeholder="Type the book title" />
        <select onChange={handleChange} value={category} className={input}>
          <option selected disabled>Choose Book Category</option>
          {CATEGORIES.map((x) => <option key={x}>{x}</option>)}
        </select>
        <button className={`${updateProgress} ${addTitleBtn}`} onClick={handleSubmit} type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
