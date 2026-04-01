import { use, useActionState } from 'react';

import { OpinionsContext } from '../store/opinions-context.jsx';
import SubmitButton from './SubmitButton.jsx';

export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);

  const [formState, formAction, pending] = useActionState(newOpinionAction, {
    success: false,
    errors: null,
  });

  async function newOpinionAction(prevState, formData) {
    const userName = formData.get('userName');
    const title = formData.get('title');
    const body = formData.get('body');

    const errors = [];

    if (title.trim().length < 5) errors.push('Title too short.');
    if (!userName.trim()) errors.push('Include your name.');
    if (body.trim().length < 5) errors.push('Body too short');

    if (errors.length > 0) {
      return {
        success: false,
        errors,
        enteredValues: {
          userName,
          title,
          body,
        },
      };
    }

    const newOpinion = {
      userName,
      title,
      body,
    };

    await addOpinion(newOpinion);
    return { errors: null, success: true };
  }

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={formState.enteredValues?.userName}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={formState.enteredValues?.title}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={formState.enteredValues?.body}
          ></textarea>
        </p>

        {formState.errors && !formState.success && (
          <ul>
            {formState.errors.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}

        <p className="actions">
          <SubmitButton />
        </p>
      </form>
    </div>
  );
}
