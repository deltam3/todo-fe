import axios from "axios";

export async function getTodos() {
  const url = "http://localhost:8001/todos";
  try {
    const response = await axios.get(url);
    return response.data.todos;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
