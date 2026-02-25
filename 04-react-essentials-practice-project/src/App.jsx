import { useState } from "react";

import Header from "./components/Header.jsx";
import Inputs from "./components/Inputs.jsx";
import { calculateInvestmentResults } from "./util/investment.js";
import Results from "./components/Results.jsx";

const initialInvestments = {
  initialInvestment: 15000,
  annualInvestment: 900,
  expectedReturn: 5.5,
  duration: 12,
};

function App() {
  const [userInput, changeUserInput] = useState(initialInvestments);

  function handleUserInput(e) {
    const { name, value } = e.target;

    changeUserInput((prev) => ({
      ...prev,
      [name]: +value,
    }));
  }

  const annualData = calculateInvestmentResults(userInput);

  return (
    <>
      <Header></Header>
      <main>
        <Inputs userInput={userInput} onUserInput={handleUserInput}></Inputs>
        <Results data={annualData}></Results>
      </main>
    </>
  );
}

export default App;
