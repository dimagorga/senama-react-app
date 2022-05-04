import ToDoItem from "../ToDoItem/ToDoItem";
import s from "./ToDoList.module.css";

const ToDoList = () => {
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </ul>
    </div>
  );
};
export default ToDoList;
