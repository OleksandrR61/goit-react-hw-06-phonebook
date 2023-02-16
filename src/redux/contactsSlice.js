import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
    name: "contacts",
    initialState: [],
    reducers: {
        addContact: (contacts, {payload}) => {
            contacts.push(payload);
        },
        deleteContact: (contacts, {payload}) => {
            return contacts.filter(contact => contact.name !== payload);
        },
    }
});

export const {addContact, deleteContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;