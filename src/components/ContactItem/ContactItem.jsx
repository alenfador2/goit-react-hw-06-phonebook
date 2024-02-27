import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDelete }) => {
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

export default ContactItem;
