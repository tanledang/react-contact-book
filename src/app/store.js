import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../features/contacts/contactsSlice'
import accountReducer from '../features/account/accountSlice'

export default configureStore({
    reducer: {
        contacts: contactsReducer,
        account: accountReducer
    }
})