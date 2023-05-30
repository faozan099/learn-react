function Content() {
  const HandleNameChange = () => {
    const names = ["Bob", "Kevin", "Simon", "Shopia"];
    const int = Math.floor(Math.random() * 4);
    return names[int];
  };

  const handleClick = () => {
    console.log("you clicked it");
  };
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };
  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hallo {HandleNameChange()}!</p>
      <button onClick={handleClick}>Click It!!</button>
      <button onClick={() => handleClick2('fauzan')}>Click It!!!</button>
      <button onClick={(e) => handleClick3(e)}>Click It!!!</button>
    </main>
  );
}

export default Content;
