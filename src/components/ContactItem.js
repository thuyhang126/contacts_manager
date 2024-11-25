import React from 'react';

function ContactItem({ contact, deleteContact, editContact }) {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
      <td>
        <button onClick={() => editContact(contact.id)}>Edit</button>
        <button onClick={() => deleteContact(contact.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default ContactItem;
