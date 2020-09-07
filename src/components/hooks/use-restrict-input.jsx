import { useState } from 'react';
import { MAX_NUMBER_LENGTH } from '../../constants';

const regexpNumber = /^[0-9]*\.?[0-9]*$/;

export const useRestrictInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = ({ target: { value: v } }) => {
    console.log({ v })
    if (typeof v === 'string' && v.match(regexpNumber)) {
      setValue(v.slice(0, MAX_NUMBER_LENGTH).trim());
    } 
    if (typeof v === 'number') {
      setValue(v);
    }
  }
  return { value, onChange };
}