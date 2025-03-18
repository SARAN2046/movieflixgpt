export const checkValidation = (email, password) => {
  let errors = {};
  const isEmailValid = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) errors.email = "Email is not valid";
  if (!isPasswordValid) errors.password = "Password is not valid";

  return Object.keys(errors).length > 0 ? errors : null;
};
