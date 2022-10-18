import { useSelector } from "react-redux";
import Item from "../Item/Item";

const Items = () => {
  const todos = useSelector((state: any) => state.tasks.entities);

  console.log('TODOS', todos)
  return (
    <ul className="tasks-list">
      {todos.map((todo: any) => (
        <Item id={todo.id} title={todo.name} completed={todo.completed} />
      ))}
    </ul>
  );
};

export default Items;
