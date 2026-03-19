// ? Validating form using states on lost focus (blur)

function SignupForm() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  // Validate always, but only SHOW errors if field was touched
  function validate(values) {
    const errors = {};
    if (!values.email.includes('@')) errors.email = 'Invalid email';
    if (values.password.length < 6) errors.password = 'Min 6 characters';
    return errors;
  }

  const errors = validate(values); // runs on every render

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true })); // mark field as touched
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Mark ALL fields as touched on submit so all errors show
    setTouched({ email: true, password: true });

    if (Object.keys(errors).length > 0) return; // stop if errors exist

    console.log('Submitted!', values);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {/* Only show error if field was touched */}
      {touched.email && errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.password && errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

      <button type="submit">Sign Up</button>
    </form>
  );
}
```

---

// ## The Flow
// ```;
// User types → handleChange updates values → validate() runs →
//   errors exist BUT touched is false → nothing shown yet

// User leaves field → handleBlur sets touched: true →
//   now errors ARE shown → updates live on every keystroke

// User hits submit → all fields marked touched →
//   all errors visible at once
