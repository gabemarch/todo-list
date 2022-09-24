import data from "../../data/data.json";
import './Items.scss';

const Items = () => {
  const items = data.todoItems;
  console.log(items);
  return (
    <div className="items">
      {items.map((item) => (
        <p className="items-title">{item.title}</p>
      ))}
    </div>
  );
};

export default Items;
