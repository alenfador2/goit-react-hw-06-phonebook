import React from 'react';
import { useForm } from 'react-hook-form';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const usernameInputId = nanoid();
const usertelInputId = nanoid();

const ContactForm = ({ contacts, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleFormSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    const numberAlreadyExist = contacts.some(contact =>
      contact.name.includes(name)
    );

    if (numberAlreadyExist) {
      alert(`${name} is already exist!`);
      reset();
    } else {
      onSubmit({ id: nanoid(), name, number });
      reset();
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

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default ContactForm;
