export const passwordColumnsData = {
  left: [
    {
      label: "One lowercase character",
      verification: "hasLowerCaseCharacter",
      keyId: 'has-lowercase',
    }, 
    {
      label: "One uppercase character", 
      verification: "hasUpperCaseCharacter",
      keyId: 'has-uppercase',
    }, 
    { 
      label: "One number",
      verification: "hasNumber",
      keyId: 'has-number',
    }
  ],
  right: [
    {
      label: "One special character",
      verification: "hasSpecialCharacter",
      keyId: 'has-special-character',
    },
    {
      label: "8 characters minimum",
      verification: "successLength",
      keyId: 'has-character-length',
    },
  ]
};
