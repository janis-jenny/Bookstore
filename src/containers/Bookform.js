import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

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

const BookForm = (props) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const options = categories();

  const handleChange = (e) => {
    if (e.target.id === 'title') {
      setTitle(e.target.value);
    } else {
      setCategory(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const book = {
      id: createUniqueId(),
      title,
      category,
    };

    const { createbook } = props;
    createbook(book);

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

BookForm.propTypes = {
  createbook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  createbook: (book) => dispatch(CREATE_BOOK(book)),
  removebook: (book) => dispatch(REMOVE_BOOK(book)),
});

export default connect(null, mapDispatchToProps)(BookForm);
