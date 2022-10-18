import { useSelector } from "react-redux";
import ItemCard from "../ItemCard/ItemCard";
import Items from "../Items/Items";

const List = () => {
  const todos = useSelector((state: any) => state.tasks.entities);

  return (
    <div>
      <h2>Grocery List</h2>
      <ItemCard />
      <Items />
      <div className="completed-section">
        <hr />
        <h2 className="completed-section-header">Completed</h2>
        <div>
          {todos.map((item: any) =>
            item.completed === true ? <span>{item.name}</span> : null
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
