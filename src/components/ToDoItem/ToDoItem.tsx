import { changeStatusToDo } from "../../Api/toDoApi";
import { Checkbox, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import s from "./ToDoItem.module.css";

interface ToDo {
  _id: string;
  task: string;
  isActive: boolean;
  onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
  getAllToDos: () => void;
}

const ToDoItem = ({ _id, isActive, task, onDelete, getAllToDos }: ToDo) => {
  const changeStatus = (e: any) => {
    changeStatusToDo(e.target.id, { isActive: !isActive }).then((data) => {
      console.log(data);
      getAllToDos();
    });
  };

  return (
    <li key={_id} className={s.toDo}>
      <label className={s.label}>
        <Checkbox
          id={_id}
          onChange={changeStatus}
          type="checkbox"
          checked={!isActive}
        />
        <p className={isActive ? s.descr : s.disabled}>{task}</p>
      </label>
      <Button className={s.button} type="default" id={_id} onClick={onDelete}>
        <DeleteOutlined />
      </Button>
    </li>
  );
};

export default ToDoItem;
