// import { useState } from 'react';
const ContactItem = ({ contact: { name, number, id } }) => {
  console.log(name);
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button">X</button>
    </div>
  );
};

export default ContactItem;
