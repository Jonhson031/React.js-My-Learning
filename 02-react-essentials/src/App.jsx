import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcept></CoreConcept>
        <Examples></Examples>
      </main>
    </>
  );
}

export default App;
