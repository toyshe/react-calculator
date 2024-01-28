export default function OperationButtons({ setInputOperation, setEquation, equation }) {
  const handleOperationButton = (event) => {
    let clickedOperation
    if (event.target.innerText === "mod") {
      clickedOperation = `%`;
      handleOperationButtonClick(clickedOperation);
      
    }else if(event.target.innerText === '√'){
        clickedOperation = `**0.5`;
      handleOperationButtonClick(clickedOperation);
    } else if(event.target.innerText === '²'){
        clickedOperation = `**2`;
      handleOperationButtonClick(clickedOperation);
    } else if(event.target.innerText === "pi"){
        clickedOperation = `* Math.PI`
        handleOperationButtonClick(clickedOperation)
    }
    
    else {
      clickedOperation = `${event.target.innerText}`;
    handleOperationButtonClick(clickedOperation);

    }
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

  return (
    <section className="operation-buttons" onClick={handleOperationButton}>
      <button>+</button>
      <button>-</button>
      <button>*</button>
      <button>/</button>
      <button>√</button>
      <button>²</button>
      <button>mod</button>
      <button>pi</button>
      <button>(</button>
      <button>)</button>
      <button>.</button>
      <button>=</button>
    </section>
  );
}
