import { useState } from 'react';

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });

  // * Validate forms on lost focus (blur)
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  // Validate always, but only SHOW errors if field was touched
  function validateForm() {
    const errors = {};
    if (!enteredValues.email.includes('@')) {
      errors.email = 'Invalid Email';
    }
    if (enteredValues.password.length < 6) {
      errors.password = 'Password should be at least 6 characters!';
    }
    return errors;
  }

  const errors = validateForm();

  function handleChange(identifier, value) {
    setEnteredValues((prev) => ({
      ...prev,
      [identifier]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.keys(errors).length > 0) return; // stop if errors exist

    console.log(enteredValues);

    // ? To reset values:
    setEnteredValues({
      email: '',
      password: '',
    });
    setTouched({
      email: false,
      password: false,
    });
  }

  function handleInputBlur(e) {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true, // mark field as touched
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={handleInputBlur}
            value={enteredValues.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
          {touched.email && errors.email && <div className="control-error">{errors.email}</div>}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onBlur={handleInputBlur}
            value={enteredValues.password}
            onChange={(e) => handleChange('password', e.target.value)}
          />
          {touched.password && errors.password && (
            <div className="control-error">{errors.password}</div>
          )}
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
