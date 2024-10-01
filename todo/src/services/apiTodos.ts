import axios from "axios";

const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/todos`;

axios.defaults.withCredentials = true;

export async function getTodos() {
  try {
    const response = await axios.get(url);
    return response.data.todos;
  } catch (error) {
    return error;
  }
}

interface TodoContent {
  content: string;
  category: string;
}

export async function createTodo(content: TodoContent) {
  const todo = { content: content.content, category: content.category };
  try {
    const res = await axios.post(url, todo);
    return res.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      throw new Error(err.response?.data?.message || "에러 발생");
    } else {
      throw new Error("모르는 에러 발생");
    }
  }
}

export async function deleteTodo(id: number) {
  try {
    const response = await axios.delete(`${url}/${id}`);
    return response;
  } catch (err) {
    return err;
  }
}

export async function updateTodoDone(temp: {
  id: number;
  newIsDone: boolean | number;
}) {
  const id = temp.id;
  let done = temp.newIsDone;
  if (done == false) {
    done = 1;
  } else {
    done = 0;
  }

  try {
    const response = await axios.patch(`${url}/${id}`, { done });
    return response;
  } catch (err) {
    return err;
  }
}
