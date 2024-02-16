import { Header } from "./components/Header"
import { Results } from "./components/Results"
import { UserInput } from "./components/UserInput"
import { useState } from "react";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInputUser) => {
      return {
        ...prevInputUser,
        [inputIdentifier]: +newValue, 
      };
    });
  }

  const isValidInput = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInputValue={userInput} onChangeInput={handleChange} />
      {!isValidInput && <p className="center">Please enter duration greater than zero</p>}
      {isValidInput && <Results input={userInput} />}
    </>
  );
}

export default App
