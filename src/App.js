import { Component } from 'react';
import Form from './Components/Form';
import ContactList from './Components/ContactList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form />
        <ContactList />
      </>
    );
  }
}

export default App;
