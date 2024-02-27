import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { deleteNumber } from '../../redux/contactsSlice';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const onDelete = id => {
    dispatch(deleteNumber(id));
  };

  return (
    <>
      <ul className={css.contact_list}>
        {contacts &&
          contacts.map(({ id, number, name }) => (
            <ContactItem
              id={id}
              key={id}
              number={number}
              name={name}
              onDelete={onDelete}
              className={css.contact_item}
            />
          ))}
      </ul>
    </>
  );
};

export default ContactList;
