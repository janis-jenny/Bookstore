import PropTypes from 'prop-types';
import { inputFilter } from '../style/BookForm.module.css';

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
    <select className={inputFilter} onChange={callback} value={value}>
      {categories.map((item) => <option key={item}>{item}</option>)}
    </select>
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
