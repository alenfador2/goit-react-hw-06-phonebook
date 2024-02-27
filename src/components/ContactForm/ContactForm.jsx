import { addNumber } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import css from './ContactForm.module.css';
import { nanoid } from '@reduxjs/toolkit';

const usernameInputId = nanoid();
const usertelInputId = nanoid();

const ContactForm = () => {
  const contacts = useSelector(state => state.contacts);
  console.log(contacts);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleFormSubmit = data => {
    const { name, number } = data;
    console.log(data.name);
    console.log(data.number);
    if (name && number) {
      const numberAlreadyExist =
        contacts && contacts.some(contact => contact.name === name);

      if (numberAlreadyExist) {
        alert(`${name} is already exist!`);
        reset();
      } else {
        dispatch(addNumber(data.name, data.number));
        localStorage.setItem('contacts', JSON.stringify(contacts));

        reset();
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className={css.contact_container}>
          <label htmlFor={usernameInputId} className={css.username_label}>
            Name
          </label>
          <input
            type="text"
            name="name"
            {...register('name', {
              required: 'Name is required!',
              pattern: {
                value:
                  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                message:
                  /Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan/,
              },
            })}
            id={usernameInputId}
            className={css.username_input}
            placeholder="Please write username"
          />
          {errors.name && <p className={css.errors}>{errors.name.message}</p>}

          <label htmlFor={usertelInputId} className={css.usertel_label}>
            Number
          </label>
          <input
            type="tel"
            name="number"
            {...register('number', {
              required: 'Number is required!',
              pattern: {
                value:
                  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
                message:
                  /Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"/,
              },
            })}
            id={usertelInputId}
            className={css.usertel_input}
            placeholder="Please write number"
          />
          {errors.number && (
            <p className={css.errors}>{errors.number.message}</p>
          )}
          <button type="submit" className={css.add_button}>
            Add contact
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
