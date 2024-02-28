import css from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteNumber } from '../../redux/contactsSlice';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDelete = id => {
    dispatch(deleteNumber(id));
  };

  return (
    <>
      <div className={css.span_container}>
        <span className={css.item_span}>{name}:</span>
        <span className={css.item_span}>{number}</span>
        <button
          className={css.item_button}
          type="button"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
