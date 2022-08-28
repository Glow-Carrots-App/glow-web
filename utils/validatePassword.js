// Minimum eight characters,
// at least one uppercase letter,
// one lowercase letter,
// one number
// and one special character
const validatePassword =
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$";
export default validatePassword;
