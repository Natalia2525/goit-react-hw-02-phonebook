// import { Component } from 'react';
import { useState } from 'react';
import PhonebookForm from './Components/PhonebookForm';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  // const [name, setName] = useState('');

  const handleSubmit = newContact => {
    setContacts(prevContacts => [newContact, ...prevContacts]);
    // console.log(newContact);
  };
  return (
    <>
      <h1>Phonebook</h1>
      <PhonebookForm onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={contacts} />
    </>
  );
};

// class App extends Component {
//   state = {
//     contacts: [],
//     name: '',
//   };

//   render() {
//     return (
//       <>
//         <h1>Phonebook</h1>
//         <Form />
//         <ContactList />
//       </>
//     );
//   }
// }

export default App;
