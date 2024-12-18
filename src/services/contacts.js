import { ContactsCollection } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};

export const createContact = async (contactData) => {
  const newContact = await ContactsCollection.create(contactData);
  return newContact;
};

export const updateContact = async (
  contactId,
  updateContactData,
  options = {},
) => {
  const result = await ContactsCollection.findOneAndUpdate(
    { _id: contactId },
    updateContactData,
    {
      new: true,
      includeResultMetadata: true,
    },
  );

  if (!result || !result.value) return null;

  return {
    contact: result.value,
  };
};

export const deleteContact = async (contactId) => {
  const contact = await ContactsCollection.findOneAndDelete({ _id: contactId });
  return contact;
};
