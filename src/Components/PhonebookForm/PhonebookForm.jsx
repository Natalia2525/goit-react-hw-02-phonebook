import { useState } from 'react';
import shortid from 'shortid';
// import {Component} from 'react';

const PhonebookForm = ({ onSubmit }) => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const id = shortid.generate();

  const handleSubmit = e => {
    e.preventDefault();
    
    const newContact = {
      id,
      name,
      number,
    };
    onSubmit(newContact);
    setName('');
    setNumber('');
    // console.log(newContact);
  };
  const handleNameChange = e => {
    setName(e.target.value);
    // console.log(e.target.value);
  };
  const handleNumberChange = e => {
    setNumber(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Number
        <input type="text" value={number} onChange={handleNumberChange} />
      </label>
      <button type="submit"> Add contact</button>
    </form>
  );
};

// class Form extends Component {
//   state = {
//     name: '',
//     number: '',
//     };

//   render() {
//     return (
//       <form>
//         <label>
//           Name
//           <input type="text" />
//         </label>
//         <button type="button"> Add contact</button>
//       </form>
//     );
//   }
// }

export default PhonebookForm;
