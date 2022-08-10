// import React from "react"

const CreateAccountForm = () => {
  return (
    <form>
      <label>
        First Name:
        <input type="text" name="firstName" />
      </label>
      <label>
        Email:
        <input type="text" name="email" />
      </label>
      <label>
        Password:
        <input type="text" name="password" />
      </label>
      <label>
        Confirm Password:
        <input type="text" name="confirmPassword" />
      </label>
      <button>Sign Up</button>
    </form>
  );
};

export default CreateAccountForm;
