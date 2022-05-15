import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as contactsActions from './contactsActions';

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (_, action) => action.payload,
  [contactsActions.addContactSuccess]: (state, action) => [
    ...state,
    action.payload,
  ],
  [contactsActions.removeContactSuccess]: (state, action) => {
    return state.filter(item => item.id !== action.payload.id);
  },
});

const error = createReducer(null, {
  [contactsActions.fetchContactsError]: (_, action) => action.payload,
  [contactsActions.fetchContactsRequest]: () => null,
  [contactsActions.addContactError]: (_, action) => action.payload,
  [contactsActions.addContactRequest]: () => null,
  [contactsActions.removeContactError]: (_, action) => action.payload,
  [contactsActions.removeContactRequest]: () => null,
});

export const filterReducer = createReducer('', {
  [contactsActions.filter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  error,
});
