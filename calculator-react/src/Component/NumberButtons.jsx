export default function NumberButtons({ setEquation, setInputNumber }) {
  const numberButtons = [];

    function handleNumberClick(event) {
      const clickedNumber = (Number(`${event.target.innerText}`))
        setInputNumber((prevInput) => prevInput * 10 + clickedNumber);
        setEquation((prevDisplay) => `${prevDisplay}${clickedNumber}`);
      
    }

  for (let i = 0; i < 10; i++) {
    numberButtons.push(
      <button onClick={handleNumberClick} key={i} className="numberButtons">
        {i}
      </button>
    );
  }
  return numberButtons;
}
