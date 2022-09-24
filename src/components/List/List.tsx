import { useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import Items from "../Items/Items";
import data from "../../data/data.json";
import { Counter } from "../Counter";

const List = () => {
  const todoItems = data.todoItems;
  const [isInputShown, setIsInputShown] = useState(false);
  const handleAddNewButton = () => {
    setIsInputShown(true);
  };

  return (
    <div>
      <Counter />
      <h2>Grocery List</h2>
      <button onClick={handleAddNewButton}>Add new</button>
      <div>{isInputShown ? <ItemCard /> : null}</div>
      <Items />
      <div className="completed-section">
        <hr />
        <h2 className="completed-section-header">Completed</h2>
        <div>
          {todoItems.map((item) => (
            item.isCompleted === true ? <span>{item.title}</span> : null
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
