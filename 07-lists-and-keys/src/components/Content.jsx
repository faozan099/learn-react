import { useState } from "react";
import { FaTrash } from "react-icons/fa";

function Content() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pound bag of Cocoa Covered Almonds Unsalted",
    },
    {
      id: 2,
      checked: false,
      item: "Items 2",
    },
    {
      id: 3,
      checked: false,
      item: "Items 3",
    },
  ]);
  console.log(Content);

  const handleCheck = (id) => {
    const listItems = items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item));
    setItems(listItems);
  };

  return (
    <main>
      <ul style={{ listStyle: "none" }}>
        {items.map((item) => (
          <li key={item.id}>
            <input type="checkbox" onChange={() => handleCheck(item.id)} checked={item.checked} />
            <label>{item.item}</label>
            <FaTrash role="button" tabIndex="0" />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Content;
