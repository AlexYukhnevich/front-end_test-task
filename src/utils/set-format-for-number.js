
export const setFormatForNumber = (value) => {
  let val = value;
  if (value === null) {
    val = 0;
  }
  return `${val}%`;
};