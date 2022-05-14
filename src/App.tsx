import "./App.css";
import Input from "./components/ToDoInput/ToDoInput";
import Title from "./components/Title/Title";
import ToDoList from "./components/TodoList/ToDoList";

import { useState } from "react";
import { fetchToDos } from "./Api/toDoApi";

type ToDo = {
  _id: string;
  task: string;
  isActive: boolean;
};

function App() {
  const [toDos, setToDos] = useState<ToDo[] | []>([]);

  const getToDos = () => {
    fetchToDos().then((data) => {
      setToDos(data.toDos);
      console.log(toDos);
    });
  };
  return (
    <div className="App">
      <Title />
      <Input getToDos={getToDos} />
      <ToDoList toDos={toDos} getToDos={getToDos} />
    </div>
  );
}

export default App;
