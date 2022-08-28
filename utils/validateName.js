export default function validateName(name) {
  // Only letters
  let nameValidation = /^[A-Za-z]+$/;

  return nameValidation.test(name);
}
