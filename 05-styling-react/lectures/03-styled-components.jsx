// ! Styled componets is depreciated, use Tailwind CSS or CSS Modules instead
// ? Styled components (npm package)
// npm i styled-components - to install locally
// Allows you to write css inside jsx component
import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  & img {
    object-fit: contain;
    margin-bottom: 2rem;
    width: 11rem;
    height: 11rem;
  }
  & h1 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.4em;
    text-align: center;
    text-transform: uppercase;
    color: #9a3412;
    font-family: "Pacifico", cursive;
    margin: 0;
  }
  & p {
    text-align: center;
    color: #a39191;
    margin: 0;
  }
  @media (min-width: 768px) {
    margin-bottom: 4rem;

    & h1 {
      font-size: 2.25rem;
    }
  }
`;

const Button = styled.button`
  padding: 10px 16px;
  background-color: blue;
  color: white;
  border-radius: 6px;
`;

// ✅ Scoped styles automatically
// Like CSS Modules, no conflicts.

// ✅ Dynamic styling (VERY powerful)
const Button2 = styled.button`
  background-color: ${(props) => (props.primary ? "blue" : "gray")};
`;

export default function App() {
  return (
    <>
      <Button>Click me</Button>
      <Button2 primary>Primary</Button2>
      <Button2>Secondary</Button2>
    </>
  );
}

// ❌ Adds extra dependency
// ❌ Slight performance overhead
// ❌ Harder to debug (generated class names)
// ❌ Mixing CSS + JS can get messy in big apps
