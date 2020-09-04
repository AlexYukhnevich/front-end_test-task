import { MAX_NAME_LENGTH } from '../constants';

export const sliceString = (value) => {
  return value && value.length > MAX_NAME_LENGTH ? 
    `${value.slice(0, MAX_NAME_LENGTH)}...`: value;
};