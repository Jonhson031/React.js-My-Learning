// ? What are Form Actions?
// * form actions let you handle form submission directly via a function, instead of using onSubmit + manual event handling.

export default function Form() {
  function handleSubmit(formData) {
    const name = formData.get('name');
    console.log(name);
  }

  return (
    <form action={handleSubmit}>
      <input name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}
