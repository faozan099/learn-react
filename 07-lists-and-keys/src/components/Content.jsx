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

  const handleCheck = (id) => {
    const listItems = items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item));
    setItems(listItems);
    localStorage.setItem("shopinglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id != id);
    console.log(id);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  return (
    <main>
      {items.length ? (
        <ul style={{ listStyle: "none" }}>
          {items.map((item) => (
            <li key={item.id}>
              <input type="checkbox" onChange={() => handleCheck(item.id)} checked={item.checked} />
              <label style={item.checked ? { textDecoration: "line-through" } : null} onDoubleClick={() => handleCheck(item.id)}>
                {item.item}
              </label>
              <FaTrash onClick={() => handleDelete(item.id)} role="button" tabIndex="0" />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>your list is empety</p>
      )}
    </main>
  );
}

export default Content;
