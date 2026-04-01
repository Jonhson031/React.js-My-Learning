// ? useFormStatus()
// * Checks if form is submitted
// Works simillar to the 'pending' inside useActionState()

// * Main diffrence:
// 'pending' - Lives outside the form, in the same component that owns the action:
// useFormStatus - Must live inside a child component of the form — it reads the parent form's status automatically:

import { useFormStatus } from 'react-dom';

// Separate child component
function SubmitButton() {
  const { pending } = useFormStatus();
  return <button disabled={pending}>{pending ? 'Submitting...' : 'Submit'}</button>;
}

function MyForm() {
  const [state, action] = useActionState(formAction, {});

  return (
    <form action={action}>
      <input name="email" />
      <SubmitButton /> {/* reads form status on its own */}
    </form>
  );
}

/* The Simple Rule
    If your submit button is in the same component as the form — use isPending. If it's extracted into its own component — use useFormStatus.

In practice useFormStatus is cleaner for larger apps because your SubmitButton becomes a reusable component that automatically knows the form state without any props passed to it. */
