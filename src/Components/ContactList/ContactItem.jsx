// import { useState } from 'react';
const ContactItem = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => onDelete(id)}>X</button>
    </>
  );
};

export default ContactItem;
