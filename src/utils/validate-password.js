import { SPECIAL_CHARACTERS } from '../config';
import { PASSWORD_MIN_LENGTH } from '../constants';

export const validatePassword = (password) => {

  const state = {
    hasLowerCaseCharacter: false,
    hasUpperCaseCharacter: false,
    hasNumber: false,
    hasSpecialCharacter: false,
    successLength: false,
  };

  if (password.length >= PASSWORD_MIN_LENGTH) {
    state.successLength = true;
  }

  for (let i = 0; i < password.length; i++) {
    const char = password[i];
    if (char === char.toLowerCase()) {
      state.hasLowerCaseCharacter = true;
    }
    if (char === char.toUpperCase() && !SPECIAL_CHARACTERS.includes(char)) {
      state.hasUpperCaseCharacter = true;
    }
    if (Number(char)) {
      state.hasNumber = true;
    }
    if (SPECIAL_CHARACTERS.includes(char)) {
      state.hasSpecialCharacter = true;
    }
  }
  return state;
};
