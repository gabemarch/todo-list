import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../shared/redux/reducers/taskSlice";

const ItemCard = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (event: any) => {
    event.preventDefault();

    if (value.trim().length === 0) {
      alert("Enter a task before adding !!");
      setValue("");
      return;
    }

    dispatch(
      addTask({
        id: new Date(),
        name: value,
        completed: false
      })
    );

    setValue("");
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" || e.keyCode === 13) onSubmit(e);
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        className="task-input"
        placeholder="Add task"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyPress={handleKeyDown}
      />
      <button className="task-button" onClick={onSubmit}>
        Save
      </button>
    </div>
  );
};

export default ItemCard;
