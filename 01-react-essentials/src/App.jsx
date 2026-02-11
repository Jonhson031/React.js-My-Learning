// ? JSX - Java Script + HTML together

// State
// Is a data that can change and affects what you see on screen
import { useState } from "react";

// ? Derived (computed) state = data you DON’T store, because you can calculate it from existing state.

// ? All functions that start on 'use' are reactHooks

import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabBtn from "./components/Tabs/TabBtn.jsx";


// ? React components - should always be Capitalized and return JSX

/* Props - is an object that contains values that we passed to component
function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title}></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
} */

// ? Or we can destructure this object
// (Check CoreConceot.jsx)

function App() {
  // ? You should always call hooks on top level of component functions
  const [selectedTopic, setSelectedTopic] = useState("components"); // useState returns array with two elements. Data inside parentheses is initial state value
  // selectedTopic - current state value. setSelectedTopic - state updating function

  const [currentPrice, updatePrice] = useState(100);
  function changePrice() {
    updatePrice(currentPrice - 25);
  }

  function handleSelect(clickedBtn) {
    //! useState(); - not allowed
    // tabComponent = clickedBtn;

    setSelectedTopic(clickedBtn);
  }

  let tabContent = <p>Please select a topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* // ? Passing Custom Arguments to Event Function */}
            <TabBtn
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabBtn>
            <TabBtn
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabBtn>
            <TabBtn
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabBtn>
            <TabBtn
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabBtn>
          </menu>
          {/* {tabComponent} not gonna change with function. Should use state */}
          {/* {!selectedTopic && <p>Please select a topic</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
           */}
          {tabContent}
          <div>
            <p data-testid="price">{currentPrice}</p>
            <button onClick={changePrice}>Apply Discount</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
