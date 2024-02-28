import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter) || '';
  return (
    <ul>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(filteredContact => {
          return (
            <ContactItem
              key={filteredContact.id}
              id={filteredContact.id}
              name={filteredContact.name}
              number={filteredContact.number}
            />
          );
        })}
    </ul>
  );
};

export default ContactList;
