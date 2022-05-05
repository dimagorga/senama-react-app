import axios from "axios";

interface ItoDo {
  toDo: string;
  toDoId: string;
}

type ToDo = {
  _id: string;
  task: string;
  isActive: boolean;
};

type GetTodosResponse = {
  toDos: ToDo[];
};

axios.defaults.baseURL = "https://senamasoft-test.herokuapp.com/api";

export async function fetchToDos() {
  const { data } = await axios.get<GetTodosResponse>("/todo");
  return data;
}

export async function postToDo(toDo: ItoDo) {
  const { data } = await axios.post("/todo", toDo);
  return data;
}

export async function deleteTodo(toDoId: ItoDo) {
  const { data } = await axios.delete(`/contacts/${toDoId}`);
  return data;
}
