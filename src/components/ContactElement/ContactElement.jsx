import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { deleteContact } from 'redux/contactsSlice';

import styles from './ContactElement.module.css';

export const ContactElement = ({contact}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteContact(contact.name));
        Notify.success(`Contact ${contact.name} removed`);
    };

    return (
        <div className={styles.contactElement}>
            <div className={styles.contactElementInfo}>
                <p><span className={styles.contactElementText}>Name: </span>{contact.name}</p>
                <p><span className={styles.contactElementText}>Number: </span>{contact.number}</p>
            </div>
            <button
                type="button"
                className="button"
                onClick={handleClick}
            >
                Delete
            </button>
        </div>
    );
};

ContactElement.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
};