import PropTypes from 'prop-types';

const CategoryFilter = (props) => {
  const { callback, value } = props;

  const categories = [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  return (
    <>
      <div>
        Filter books by category:
      </div>
      <select id="category" onChange={callback} value={value}>
        {categories.map((item) => <option key={item}>{item}</option>)}
      </select>
    </>
  );
};

CategoryFilter.propTypes = {
  callback: PropTypes.func.isRequired,
  value: PropTypes.string,
};

CategoryFilter.defaultProps = {
  value: 'All',
};

export default CategoryFilter;
