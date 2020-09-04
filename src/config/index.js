export const SPECIAL_CHARACTERS = [
  " ",
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  "|",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
// export const PASSWORD_MIN_LENGTH = 8;
// export const MAX_NAME_LENGTH = 15;
// export const MAX_NUMBER_LENGTH = 12;

// allowed column fields for sorting
export const ALLOWED_VALUES_FOR_SORT = [
  'name', 
  'status', 
  'resources', 
  'price', 
  'provider', 
  'complicity', 
  'start_date', 
  'deadline', 
  'offers'
];

// backend endpoint
export const BASE_URL = 'http://localhost:8080';

// prefixers
export const PROJECT_PREFIX = '/projects';
export const AUTH_PREFIX = '/auth';

// for checking project is drafted
export const PROJECT_DRAFTED = 'save_as_draft';

// tokens
export const AUTHORIZATION_TOKEN_PREFIX = 'Bearer';
export const ACCESS_TOKEN = 'access_token';
export const REFRESH_TOKEN = 'refresh_token';

// formatting
export const CURRENCY = {
  usd: '$'
};

// className for changing structure of component. 
// Use when height of app less than height of popup 
export const CHANGE_COMPONENT_STRUCTURE = 'change-component-structure';