function Content() {
    const HandleNameChange = () => {
        const names = ["Bob", "Kevin", "Simon", "Shopia"];
        const int = Math.floor(Math.random() * 4);
        return names[int];
      };
    
  return (
    <main>
        <p>
            Hallo {HandleNameChange()}!
        </p>
    </main>
    )
}

export default Content