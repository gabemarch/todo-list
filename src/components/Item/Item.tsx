import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, completeTask } from "../../shared/redux/reducers/taskSlice";

const Item = ({ id, title, completed }: any) => {
  const dispatch = useDispatch<any>();

  const removeTask = () => {
    dispatch(
      deleteTask({
        id: id,
      })
    );
  };

  const completeTodo = () => {
    dispatch(completeTask({ id: id }));
  };

  return (
    <li className="task-item">
      <div>{title}</div>
      <div>
        <button
          className="remove-task-button"
          onClick={() => {
            removeTask();
          }}
        >
          Delete
        </button>
        <button
          className="complete-task-button"
          onClick={() => {
            completeTodo();
          }}
        >
          Complete
        </button>
      </div>
    </li>
  );
};

export default Item;
