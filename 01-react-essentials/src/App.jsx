// ? JSX - Java Script + HTML together
import image from "./assets/react-core-concepts.png";
import component from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";

const descriptions = ["Fundemential", "Core", "Crucial"];
const getRandomInt = function (max) {
  return Math.floor(Math.random() * (max + 1));
};
// React components - should always be Capitalized and return JSX
function Header() {
  // Header is nested (child) component
  return (
    <header>
      {/* dynamically loading image */}
      <img src={image} alt="Stylized atom" />
      <h1>Essentials</h1>
      <p>
        {/* dynamic component 
          Important: if-statements, for-loops, function definitions and other
          block statements are not allowed here!  Only expressions that directly produce a value.*/}
        {descriptions[getRandomInt(descriptions.length - 1)]} React concepts you
        will need for almost any app you are going to build!
      </p>
    </header>
  );
}

// Props - is an object that contains values that we passed to component
// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title}></img>
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

// ? Or we can destructure this object
function CoreConcept({ title, description, image }) {
  return (
    <li>
      <img src={image} alt={title}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  // App is root component
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* ? // ? Props - React allows you to pass data to components */}
            {/* <CoreConcept
              title="Components"
              description="The Core UI Building Block."
              image={component}
            ></CoreConcept> */}

            {/* // ? Alternative Props Syntaxes. You can also load data from other file */}
            {/* <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept> */}

            {/* // ? We can also use map to render it */}
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
