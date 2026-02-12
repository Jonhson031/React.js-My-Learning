import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";
import Section from './Section.jsx';

export default function CoreConcepts() {
  return (
    <Section title="Core Concepts" id="core-concepts">
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
    </Section>
  );
}
