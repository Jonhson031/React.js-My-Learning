import Input from "./Input.jsx";

export default function InvestmentInputs({ userInput, onUserInput }) {
  return (
    <div id="user-input">
      <Input
        inputValue={userInput.initialInvestment}
        labelValue="Initial Investment"
        id="initial-investment"
        name="initialInvestment"
        onChange={onUserInput}
      />
      <Input
        inputValue={userInput.annualInvestment}
        labelValue="Annual Investment"
        id="annual-investment"
        name="annualInvestment"
        onChange={onUserInput}
      />
      <Input
        inputValue={userInput.expectedReturn}
        labelValue="Expected Return"
        id="expected-return"
        name="expectedReturn"
        onChange={onUserInput}
      />
      <Input
        inputValue={userInput.duration}
        labelValue="Duration"
        id="duration"
        name="duration"
        onChange={onUserInput}
      />
    </div>
  );
}
