import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../features/contacts/contactsSlice';

const AddContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();

    const submitForm = async (event) => {
        event.preventDefault();
        await fetch('/add-contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            dispatch(addContact(data));
            setName("");
            setEmail("");
        })
        .catch((error) =>
        console.log("Unable to add contact", error)
        )
    }
    
    return (
        <form id="add-contact" onSubmit={submitForm}>
            <label htmlFor="name">Name:</label><br/>
            <input onChange={(event) => setName(event.target.value)} type="text" id="name" name="name" placeholder="John Doe"/><br/>
            <label htmlFor="email">Email Address:</label><br/>
            <input onChange={(event) => setEmail(event.target.value)} type="email" id="email" name="email" placeholder="john.doe@gmail.com"/><br/><br/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default AddContactForm;