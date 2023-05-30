import { useState } from "react";

function Content() {
  const [nama, setNama] = useState("faozan");
  const [count, setCount] = useState(0);

  const HandleNameChange = () => {
    const names = ["Bob", "Kevin", "Simon", "Shopia", "Dave"];
    const int = Math.floor(Math.random() * 5);
    setNama(names[int]);
  };

  const handleClick = () => {
    setCount(count + 1)
    setCount(count + 1)
    console.log(count);
  };
  const handleClick2 = () => {
    console.log(count);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hallo {nama}!</p>
      <button onClick={handleClick}>Click He!!</button>
      <button onClick={HandleNameChange}>Change Name!!</button>
      <button onClick={handleClick2}>Click She!!</button>
    </main>
  );
}

export default Content;
