import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: []
    },
    reducers: {
        setContacts: (state, action) => {
            state.contacts = action.payload
        },
        addContact: (state, action) => {
            state.contacts = [...state.contacts, action.payload]
        },
        deleteContactById: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
        }
    }
})

export const { setContacts, addContact, deleteContactById } = contactsSlice.actions;

export default contactsSlice.reducer;