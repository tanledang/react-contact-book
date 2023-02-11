import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setContacts, deleteContactById } from '../features/contacts/contactsSlice';
import Contact from './Contact';
import AddContactForm from './AddContactForm';
import LoginForm from './LoginForm';

const ContactBook = () => {
    const contacts = useSelector(state => state.contacts.contacts);
    const dispatch = useDispatch();

    const fetchContactsToState = async () => {
        await fetch("/contact-book")
            .then(response => response.json())
            .then(json => dispatch(setContacts(json)));
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
            dispatch(deleteContactById(id))
        })
    }

    useEffect(() => {
        fetchContactsToState();
    }, [])
    
    return (
        <div className="body">
            <LoginForm/>
            <h1>Contact book</h1>
            {contacts.map(contact => 
            <Contact contact={contact} key={contact.id} removeContactById={removeContactById} fetchContactsToState={fetchContactsToState}/>
            )}
            <AddContactForm/>
        </div>
    )

}

export default ContactBook;