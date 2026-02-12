// ? Dymanic React components
// Means choosing which component (or HTML element) to render based on data, props, or logic.

export default function Tabs({ children, buttons, ButtonsContainer = "menu"}) { // We ca also set default prop value.
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
