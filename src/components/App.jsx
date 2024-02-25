import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNumber } from 'redux/contactsSlice';
import { contactsReducer } from '../redux/contactsSlice';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  const [prevContacts, setPrevContacts] = useState([]);

  const dispatch = useDispatch();

  // const addContacts = ({ id, name, number }) => {
  //   const contact = { id, name, number };
  //   contact.id = nanoid();
  //   setContacts(prev => [...prev, contact]);
  // };

  const addContact = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addNumber(form.element.target.value));
    form.reset();
  };

  const onFilter = event => {
    setFilter(event.target.value);
  };

  const onFilterContacts = () => {
    if (filter) {
      return contacts.filter(contact => {
        return (
          contact.name.includes(filter) ||
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );
      });
    } else {
      return contacts;
    }
  };

  const handleDelete = id => {
    const filteredContacts = contacts.filter(contact => contact.id !== id);
    setContacts(filteredContacts);
  };

  useEffect(() => {
    const storageContacts = localStorage.getItem('contacts');
    console.log(storageContacts);
    const parsedContacts = JSON.parse(storageContacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    if (contacts.toString() !== prevContacts.toString()) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
      setPrevContacts(contacts);
    }
  }, [contacts, prevContacts]);

  return (
    <>
      <div className="main-div">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} contacts={contacts} />
        <h2>Contacts</h2>
        <Filter filter={filter} onFilter={onFilter} />
        <ContactList
          contacts={onFilterContacts()}
          filter={filter}
          filterContacts={onFilterContacts}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
};
export default App;
