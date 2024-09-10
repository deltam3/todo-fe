"use client";

import { useState } from "react";
import { PostTodo } from "@/features/todos/postTodos";
const TodoInput = () => {
  const [todoContent, setTodoContent] = useState("");
  const { mutate } = PostTodo();

  const submitHandler = (e) => {
    e.preventDefault();
    if (todoContent.trim() === "") return;
    mutate({ content: todoContent });
    setTodoContent("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={todoContent}
        onChange={(e) => setTodoContent(e.target.value)}
        className="border-yellow-500 border-[3px]"
      />
    </form>
  );
};

export default TodoInput;
