import { useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { ContactElement } from "components";
import { getContacts, getFilter } from 'redux/selectors';

import styles from './ContactList.module.css';

const getContactsForRender = (contacts, filter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase().trim()));
};

export const ContacList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    
    const contactsForRender = filter
        ? getContactsForRender(contacts, filter)
        : contacts;

    if (contacts.length === 0) {
        Notify.info("Add your first contact please.");
    } else if (contactsForRender.length === 0) {
        Notify.info("No contacts found for your request.");
    };

    return (
        <>
            {
                contactsForRender.length > 0 &&
                    <ul className={styles.contactList}>
                        {contactsForRender.map((contact) =>
                            <li key={contact.name}><ContactElement contact={contact}/></li>
                        )}
                    </ul>
            }
        </>
    );
};