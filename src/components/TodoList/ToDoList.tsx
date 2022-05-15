import ToDoItem from "../ToDoItem/ToDoItem";
import s from "./ToDoList.module.css";
import { deleteToDo } from "../../Api/toDoApi";
import { useEffect } from "react";

type ToDo = {
  _id: string;
  task: string;
  isActive: boolean;
};

interface Props {
  toDos: ToDo[];
  getToDos: () => void;
}

const ToDoList = ({ toDos, getToDos }: Props) => {
  useEffect(() => {
    getToDos();
  }, []);

  const onDelClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.id);
    deleteToDo(e.currentTarget.id).then((data) => {
      console.log(data);
      getToDos();
    });
  };

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
              onDelete={onDelClick}
              getAllToDos={getToDos}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default ToDoList;
