import { useDispatch } from "react-redux";
import { deleteTask, completeTask } from "../../shared/redux/reducers/taskSlice";
import './Item.scss';

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
    console.log(id, title, completed)
    dispatch(completeTask({ completed: true }));
  };

  return (
    <li className="task-item">
      <div className="task-item-title">{title}</div>
      <div className="task-item-buttons">
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
