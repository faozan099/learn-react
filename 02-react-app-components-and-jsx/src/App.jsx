import "./App.css";

function App() {
  const HandleNameChange = () => {
    const names = ["Bob", "Kevin", "Simon", "Shopia"];
    const int = Math.floor(Math.random() * 4);
    return names[int];
  };
  return (
    <div>
      <p>Hallo {HandleNameChange()}!</p>
    </div>
  );
}

export default App;
