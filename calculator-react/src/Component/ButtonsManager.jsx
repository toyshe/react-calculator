import { useState } from "react";
import ClearButtons from "./ClearButtons";
import NumberButtons from "./NumberButtons";
import OperationButtons from "./OperationButtons";
import DisplayButtons from "./DisplayButtons";

export default function ButtonsManager() {
  const [equation, setEquation] = useState("");
  const [inputNumber, setInputNumber] = useState(0);
  const [inputOperation, setInputOperation] = useState("");

  return (
    <main>
      <NumberButtons setEquation={setEquation} setInputNumber={setInputNumber}/>
      <OperationButtons setInputOperation={setInputOperation} setEquation={setEquation} equation={equation} />
      <ClearButtons equation={equation} setEquation={setEquation} />
      <DisplayButtons equation={equation} />
    </main>
  );
}
