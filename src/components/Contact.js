import React from 'react';

const Contact = ({contact , removeContactById}) => {
    return (
        <div className="contactCard">
            <p>{contact.name}</p>
            <p>{contact.email}</p>
            <button className="remove-contact" id={contact.id} onClick={() => removeContactById(contact.id)}> Remove </button>
        </div>
    )
}

export default Contact;