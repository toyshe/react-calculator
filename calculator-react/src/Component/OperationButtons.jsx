export default function OperationButtons({setInputOperation, setEquation, equation}) {
  const handleOperationButton = (event) => {
    let clickedOperation;

    if (event.target.innerText === "mod") {
      clickedOperation = `%`;
    } else if (event.target.innerText === "√") {
      clickedOperation = `**0.5`;
    } else if (event.target.innerText === "²") {
      clickedOperation = `**2`;
    } else if (event.target.innerText === "pi") {
      clickedOperation = `* Math.PI`;
    } else {
      clickedOperation = `${event.target.innerText}`;
    }
    handleOperationButtonClick(clickedOperation);
  };

  const handleOperationButtonClick = (clickedOperation) => {
    setInputOperation(clickedOperation);

    if (clickedOperation === "=") {
      handleEquationEvaluation();
    } else {
      setEquation((prevDisplay) => `${prevDisplay}${clickedOperation}`);
    }
  };

  const handleEquationEvaluation = () => {
    try {
      const result = eval(equation);
      setEquation(result.toString());
    } catch (error) {
      setEquation("Error");
    }
  };

  const operations = [
    "+", "-", "*", "/", "√", "²", "mod", "pi", "(", ")", ".", "=",
  ];

  return (
    <section className="operation-buttons" onClick={handleOperationButton}>
      {operations.map((operation) => {
        <button>{operation}</button>;
      })}
    </section>
  );
}
