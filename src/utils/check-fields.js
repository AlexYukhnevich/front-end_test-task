import { values } from 'lodash';

const allowedValues = ['', null, 0];

export const checkFields = (state) => 
  values(state).every(val => allowedValues.includes(val) || val);
