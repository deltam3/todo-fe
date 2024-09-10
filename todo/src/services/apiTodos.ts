import axios from "axios";
import { TodoItemType } from "../../types/todos";

const url = "http://localhost:8001/todos";

export async function getTodos() {
  try {
    const response = await axios.get(url);
    return response.data.todos;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function createTodo(todo: TodoItemType) {
  try {
    await axios.post(url, todo);
  } catch (err) {
    console.log(err);
  }
}

export async function deleteTodo(id: number) {
  try {
    const response = await axios.delete(`${url}/${id}`);
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function updateTodoDone(temp: any) {
  console.log(temp);
  const id = temp[0];
  let done = temp[1];
  if (done == false) {
    done = 1;
  } else {
    done = 0;
  }
  try {
    const response = await axios.patch(`${url}/${id}`, { done });
  } catch (err) {
    throw err;
  }
}
