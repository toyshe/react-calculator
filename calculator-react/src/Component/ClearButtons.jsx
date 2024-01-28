export default function ClearButtons({ equation, setEquation }) {
  const handleClearButton = () => {
    setEquation("");
  };

  return (
    <button className="clear-button" onClick={handleClearButton}>
      Clear
    </button>
  );
}
