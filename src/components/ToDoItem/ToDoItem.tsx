import s from "./ToDoItem.module.css";

interface ToDo {
  _id: string;
  task: string;
  isActive: boolean;
}

const ToDoItem = ({ _id, isActive, task }: ToDo) => {
  return (
    <li key={_id} className={s.toDo}>
      <label className={s.label}>
        {<input type="checkbox" />}
        <p className={s.descr}>{task}</p>
      </label>
      <button>x</button>
    </li>
  );
};

export default ToDoItem;
