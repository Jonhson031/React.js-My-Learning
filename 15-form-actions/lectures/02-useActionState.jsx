// ? useStateAction
// * manages pending, error, and result state for you:

import { useActionState } from 'react';

import { useActionState } from 'react';

async function signupAction(prevState, formData) {
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    await api.signup({ email, password });
    return { success: true, error: null };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

function SignupForm() {
  const [state, formAction, isPending] = useActionState(signupAction, {
    success: false,
    error: null
  });

  return (
    <form action={formAction}>
      <input type="email" name="email" required />
      <input type="password" name="password" required />

      {state.error   && <p style={{ color: 'red' }}>{state.error}</p>}
      {state.success && <p style={{ color: 'green' }}>Signed up!</p>}

      <button disabled={isPending}>
        {isPending ? 'Submitting...' : 'Sign Up'}
      </button>
    </form>
  );
}