import {React, useState, useEffect} from 'react';
import Contact from './Contact';
import AddContactForm from './AddContactForm';

const ContactBook = () => {
    const [contacts, setContacts] = useState([]);

    const fetchContactsToState = async () => {
        await fetch("/contact-book")
            .then(response => response.json())
            .then(json => setContacts(json));
    }

    const removeContactById = async (id) => {
        await fetch("/delete-contact", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            const updatedContacts = contacts.filter(contact => contact.id !== id);
            setContacts(updatedContacts)
        })
    }

    useEffect(() => {
        fetchContactsToState();
    }, [])
    
    return (
        <div className="body">
            <h1>Contact book</h1>
            {contacts.map(contact => 
            <Contact contact={contact} key={contact.id} removeContactById={removeContactById} fetchContactsToState={fetchContactsToState}/>
            )}
            <AddContactForm setContacts={setContacts} fetchContactsToState={fetchContactsToState}/>
        </div>
    )

}

export default ContactBook;