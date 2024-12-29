import { CONTACT_TYPE } from '../constants/index.js';

const parseType = (type) => {
  const isString = typeof type === 'string';

  if (!isString) return;

  const isType = (type) => CONTACT_TYPE.includes(type);

  if (isType(type)) return type;
};

const parseFavour = (isFavour) => {
  if (isFavour === false) return;

  return isFavour;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedType = parseType(contactType);
  const parsedFavour = parseFavour(isFavourite);

  return {
    contactType: parsedType,
    isFavourite: parsedFavour,
  };
};
