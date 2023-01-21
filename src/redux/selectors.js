import { createSelector } from '@reduxjs/toolkit';
import { getContacts } from './contacts/selectors';
import { selectFilter } from './filter/selectors';

export const getFilteredList = createSelector([getContacts, selectFilter], (contacts, filter) => {
  const normalizedFilter = filter.trim().toLowerCase();
  return contacts.filter(({ name }) => name.trim().toLowerCase().includes(normalizedFilter));
});
