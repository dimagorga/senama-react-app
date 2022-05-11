import React, { useState } from "react";
import { postToDo } from "../../Api/toDoApi";

interface Props {
  getToDos: () => void;
}

const Input = ({ getToDos }: Props) => {
  const [value, setValue] = useState<string>("");

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const onBtnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const taskValue = { task: value };
    console.log(taskValue);

    postToDo(taskValue).then((data) => {
      console.log(data);
      getToDos();
    });
  };

  return (
    <div>
      <form onSubmit={onBtnSubmit}>
        <label>
          What you need to do?
          <input value={value} onChange={changeValue} />
          <button>Create new ToDo </button>
        </label>
      </form>
    </div>
  );
};

export default Input;
