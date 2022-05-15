import * as contactsActions from './contactsActions';
import * as contactsAPI from '../../services/contactsAPI';

export const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest);

  try {
    const contacts = await contactsAPI.fetchContacts();
    dispatch(contactsActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
}; //Получение контактов

export const addContact = contact => async dispatch => {
  dispatch(contactsActions.addContactRequest);

  try {
    const newContact = await contactsAPI.addContact(contact);
    dispatch(contactsActions.addContactSuccess(newContact));
  } catch (error) {
    console.log(error.message);

    dispatch(contactsActions.addContactError(error));
  }
}; //Добавление контакта

export const removeContact = contactId => async dispatch => {
  dispatch(contactsActions.removeContactRequest);

  try {
    const removedContact = await contactsAPI.removeContact(contactId);
    dispatch(contactsActions.removeContactSuccess(removedContact));
  } catch (error) {
    dispatch(contactsActions.removeContactError(error.message));
  }
}; //Удаление контакта
