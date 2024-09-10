"use client";
import TodoItem from "@/components/TodoItem";
import { TodoItemType } from "../../types/todos";
import { useTodos } from "../features/todos/useTodos";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TodoInput from "@/components/TodoInput";

export default function Home() {
  const { todos, isPending } = useTodos();

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <main className="py-10">
      <MaxWidthWrapper>
        <h1 className="text-center">침착맨 방송 컨텐츠 시청자 추천 웹사이트</h1>
        <div className="flex justify-center">
          <img src="/logo.png" className="w-[30%] object-cover" alt="logo" />
        </div>

        <div>
          <TodoInput />
        </div>

        <ul>
          {todos.map((todo: TodoItemType) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </ul>
      </MaxWidthWrapper>
    </main>
  );
}
