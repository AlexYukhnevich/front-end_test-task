export const normalizeToNumber = (value) => {
  if (typeof value === 'string') {
    const modifiedValue = parseInt(value);
    return modifiedValue ? modifiedValue : value || 0;
  }
  return value;
}