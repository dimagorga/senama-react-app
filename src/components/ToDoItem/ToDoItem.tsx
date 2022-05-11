import { changeStatusToDo } from "../../Api/toDoApi";
import s from "./ToDoItem.module.css";

interface ToDo {
  _id: string;
  task: string;
  isActive: boolean;
  onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
  getAllToDos: () => void;
}

const ToDoItem = ({ _id, isActive, task, onDelete, getAllToDos }: ToDo) => {
  const changeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeStatusToDo(e.target.id, { isActive: !isActive }).then((data) => {
      console.log(data);
      getAllToDos();
    });
  };

  return (
    <li key={_id} className={s.toDo}>
      <label className={s.label}>
        <input
          id={_id}
          onChange={changeStatus}
          type="checkbox"
          checked={!isActive}
        />
        <p className={s.descr}>{task}</p>
      </label>
      <button id={_id} onClick={onDelete}>
        x
      </button>
    </li>
  );
};

export default ToDoItem;
