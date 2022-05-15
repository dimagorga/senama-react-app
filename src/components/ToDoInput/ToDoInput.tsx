import React, { useState } from "react";
import { postToDo } from "../../Api/toDoApi";
import { Button, Input } from "antd";
import s from "./ToDoInput.module.css";
interface Props {
  getToDos: () => void;
}

const ToDoInput = ({ getToDos }: Props) => {
  const [value, setValue] = useState<string>("");

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const onBtnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const taskValue = { task: value };
    setValue("");
    postToDo(taskValue).then((data) => {
      getToDos();
    });
  };

  return (
    <div className={s.form}>
      <form onSubmit={onBtnSubmit}>
        <label className={s.label}>
          <Input
            className={s.input}
            placeholder=" What you need to do?"
            value={value}
            onChange={changeValue}
          />
          <Button className={s.button} type="primary" htmlType="submit">
            Create new ToDo
          </Button>
        </label>
      </form>
    </div>
  );
};

export default ToDoInput;
