"use client";
import TodoItem from "@/components/TodoItem";
import { TodoItemType } from "../../types/todos";
import { useTodos } from "../features/todos/useTodos";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TodoInput from "@/components/TodoInput";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Home() {
  const { todos, isPending } = useTodos();

  if (isPending) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Image
          alt="로딩"
          src="/Loading.jpeg"
          className="flex"
          width={380}
          height={270}
        />
      </div>
    );
  }

  return (
    <main className="py-10">
      <MaxWidthWrapper className="max-w-[40rem]">
        <div className="flex align-middle">
          <Image
            alt="Page icon"
            src="/task-db-icon.svg"
            width={32}
            height={32}
            className="block object-fill rounded-[4px] w-[31.968px] h-[31.968px] transition-opacity duration-100 ease-out p-[1.8px]"
          />

          <div className="text-[rgb(55,53,47)] font-bold leading-[1.2] text-[32px] font-ui cursor-text flex items-center">
            <h1 className="max-w-full w-full whitespace-pre-wrap break-words text-[1em] caret-[rgb(55,53,47)] pt-1 pl-2 pr-2 text-base font-normal m-0">
              To-dos
            </h1>
          </div>
        </div>

        <div className="grid grid-3-cols">
          <TodoInput />
        </div>

        <Table>
          <TableCaption>침착맨 방송 컨텐츠를 추천해주세요.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="">완성</TableHead>
              <TableHead>분류</TableHead>
              <TableHead>내용</TableHead>
              <TableHead className="">작성자</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* {todos &&
              todos.map((todo: TodoItemType) => {
                return <TodoItem key={todo.id} todo={todo} />;
              })} */}
            {Array.isArray(todos) &&
              todos.map((todo: TodoItemType) => {
                return <TodoItem key={todo.id} todo={todo} />;
              })}
          </TableBody>
        </Table>
      </MaxWidthWrapper>
    </main>
  );
}
