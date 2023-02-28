import React, { Component } from 'react';
import { ContactLst } from './ContactLst/ContactList';
import { Filter } from './Filter/Filter';
import { PhonebookForm } from './PhonebookForm/PhoneForm';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleIputСhange = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  getVisibleName = () => {
    const { filter, contacts } = this.state;
    const contactNormalize = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(contactNormalize)
    );
  };

  addContacts = newContacts => {
    this.setState(prevState => {
      if (this.state.contacts.some(el => el.name === newContacts.name)) {
        alert('alert');
      } else {
        return {
          contacts: [...prevState.contacts, newContacts],
        };
      }
    });
  };

  render() {
    const visibleName = this.getVisibleName();

    return (
      <>
        <h1>Phonebook</h1>
        <PhonebookForm onSubmit={this.addContacts} />
        <h2>Contacts</h2>
        <Filter
          onChange={this.handleIputСhange}
          filterValue={this.state.filter}
        />
        <ContactLst visibleName={visibleName} onDelete={this.deleteContacts} />
      </>
    );
  }
}
