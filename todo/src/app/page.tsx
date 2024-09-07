"use client";
import { TodoItem } from "../../types/todos";
import { useTodos } from "../features/todos/useTodos";

export default function Home() {
  const { todos, isPending } = useTodos();

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>침착맨 방송 추천</h1>
      {todos.map((todo: TodoItem) => {
        return <div key={todo.id}>{todo.content}</div>;
      })}
    </div>
  );
}
