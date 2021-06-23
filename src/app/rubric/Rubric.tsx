import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  Contact,
  addContact,
  deleteContact,
  selectRubric,
} from './rubricSlice';

export function Rubric() {

  const rubric = useAppSelector(selectRubric);
  const dispatch = useAppDispatch();
  const [contact, setContact] = useState<Contact>(
    {
      id: 0,
      firstName: '',
      lastName: '',
      email: ''
    }
  );
  const handleChange = (event: any) => {
    event.preventDefault();
    
    setContact({
      ...contact,
      [event.target.name]: event.target.value,
    });
  }
  const add = (contact: Contact) => {
    
    dispatch(addContact(contact));
  }
  const del = (contact: Contact) => {

    dispatch(deleteContact(contact));
  }
  const contacts = rubric.map((contact, i) =>
    <li
      className='contact'
      key={i}
    >
      <span>Nome: {contact.firstName}</span> <br/>
      <span>Cognome: {contact.lastName}</span> <br/>
      <span>Email: {contact.email}</span>
      <button 
        onClick={() => del(contact)}
        className='del-btn'
      >del</button>
    </li>
  );

  return (
    <div className="rubric">

      <div
        className='form-group'
      >
        <input placeholder='nome' name='firstName' value={contact.firstName} onChange={handleChange} />
        <input placeholder='cognome' name='lastName' value={contact.lastName} onChange={handleChange} />
        <input placeholder='email' name='email' value={contact.email} onChange={handleChange} />
        <button
          onClick={() => add(contact)}
          className='add-btn'
        > add </button>
      </div>

      <div><ul>{contacts}</ul></div>
       
    </div>
  );
}
