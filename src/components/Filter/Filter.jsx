import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { nanoid } from 'nanoid';
import { findNumber } from '../../redux/filtersSlice';

const findNameInputId = nanoid();

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  console.log(filter);
  const onFilter = event => {
    dispatch(findNumber(event.target.value));
  };
  return (
    <>
      <label htmlFor={findNameInputId} className={css.filter_label}>
        Find contacts by name
      </label>
      <input
        type="text"
        id={findNameInputId}
        onChange={onFilter}
        value={filter}
        className={css.filter_input}
      />
    </>
  );
};

export default Filter;
