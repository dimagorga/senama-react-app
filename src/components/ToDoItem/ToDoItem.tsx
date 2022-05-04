import s from "./ToDoItem.module.css";
const ToDoItem = () => {
  return (
    <li className={s.toDo}>
      <label className={s.label}>
        <input type="checkbox" />
        <p className={s.descr}>Купить поесть</p>
      </label>
      <button>x</button>
    </li>
  );
};

export default ToDoItem;
