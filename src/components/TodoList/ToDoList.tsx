import ToDoItem from "../ToDoItem/ToDoItem";
import s from "./ToDoList.module.css";
import { fetchToDos } from "../../Api/toDoApi";
import { useEffect, useState } from "react";

type ToDo = {
  _id: string;
  task: string;
  isActive: boolean;
};

const ToDoList = () => {
  const [toDos, setToDos] = useState<ToDo[] | null>(null);
  useEffect(() => {
    fetchToDos().then((data) => {
      setToDos(data.toDos);
      console.log(toDos);
    });
  }, []);
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {toDos?.map((toDo) => {
          return (
            <ToDoItem
              key={toDo._id}
              _id={toDo._id}
              isActive={toDo.isActive}
              task={toDo.task}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default ToDoList;
