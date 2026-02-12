// ? Dymanic React components
// Means choosing which component (or HTML element) to render based on data, props, or logic.

// 1️⃣ Simplest form: Dynamic component variable
// You can store a component in a variable and render it.

import { Home } from "./Home";
import { About } from "./About";

function App({ page }) {
  const pages = {
    home: Home,
    about: About,
  };

  const ActivePage = pages[page]; // Component type

  return <ActivePage />;
}

// ? Usage:
function renderApp(){
    return (
        <App page="home" />
    )
}