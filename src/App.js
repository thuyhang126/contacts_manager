import React, { useState } from 'react';
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com' }
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [newContact, setNewContact] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editContactId, setEditContactId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact({
      ...newContact,
      [name]: value
    });
  };

  const addContact = () => {
    if (newContact.name.trim() && newContact.phone.trim() && newContact.email.trim()) {
      const newContactObj = {
        id: contacts.length + 1,
        ...newContact
      };
      setContacts([...contacts, newContactObj]);
      setNewContact({ name: '', phone: '', email: '' }); 
    }
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const editContact = (id) => {
    const contactToEdit = contacts.find(contact => contact.id === id);
    setNewContact({
      name: contactToEdit.name,
      phone: contactToEdit.phone,
      email: contactToEdit.email
    });
    setIsEditing(true);
    setEditContactId(id);
  };

  const saveContact = () => {
    const updatedContacts = contacts.map(contact =>
      contact.id === editContactId ? { ...contact, ...newContact } : contact
    );
    setContacts(updatedContacts);
    setNewContact({ name: '', phone: '', email: '' });
    setIsEditing(false);
    setEditContactId(null);
  };

  return (
    <div className="App">
      <h1>Contacts Manager</h1>

      <SearchBar 
        searchQuery={searchQuery} 
        handleSearchChange={handleSearchChange} 
      />

      <div className='container'>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newContact.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={newContact.phone}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newContact.email}
          onChange={handleInputChange}
        />
        {isEditing ? (
          <button onClick={saveContact}>Save Changes</button>
        ) : (
          <button onClick={addContact}>Add Contact</button>
        )}
      </div>

      <ContactList 
        contacts={filteredContacts} 
        deleteContact={deleteContact} 
        editContact={editContact} 
      />
    </div>
  );
}

export default App;
