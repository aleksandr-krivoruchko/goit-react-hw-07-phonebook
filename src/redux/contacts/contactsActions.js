import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest'
); //pending
export const fetchContactsSucces = createAction('contacts/fetchContactsSucces'); //fullfilled
export const fetchContactsError = createAction('contacts/fetchContactsError'); //rejected
