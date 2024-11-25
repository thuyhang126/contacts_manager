import React from 'react';
import ContactItem from './ContactItem';

function ContactList({ contacts, deleteContact, editContact }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact => (
          <ContactItem 
            key={contact.id} 
            contact={contact} 
            deleteContact={deleteContact} 
            editContact={editContact}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ContactList;
