const BookForm = () => {
  const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const options = CATEGORIES.map((category) => (
    <option
      key={CATEGORIES.indexOf(category)}
      value={category}
    >
      {category}
    </option>
  ));

  return (
    <form>
      <input type="text" placeholder="Type the book title" />
      <select>
        {options}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookForm;
