import "./App.css";
import Input from "./components/Input/Input";
import Title from "./components/Title/Title";
import ToDoList from "./components/TodoList/ToDoList";

function App() {
  return (
    <div className="App">
      <Title />
      <Input />
      <ToDoList />
    </div>
  );
}

export default App;
