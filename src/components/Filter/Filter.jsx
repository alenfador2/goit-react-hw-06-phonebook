import css from './Filter.module.css';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { findNumber } from '../../redux/filtersSlice';

const findNameInputId = nanoid();

const Filter = () => {
  const dispatch = useDispatch();
  const onFilter = event => {
    dispatch(findNumber(event.currentTarget.value));
  };
  return (
    <>
      <label htmlFor={findNameInputId} className={css.filter_label}>
        Find contacts by name
      </label>
      <input
        type="text"
        id="filter"
        name="filter"
        onChange={onFilter}
        className={css.filter_input}
      />
    </>
  );
};

Filter.propTypes = {};

export default Filter;
