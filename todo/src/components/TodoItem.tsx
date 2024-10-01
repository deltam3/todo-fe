import React, { useState } from "react";
import { TodoItemType } from "../../types/todos";
import { useDeleteTodo } from "@/features/todos/deleteTodo";
import { UpdateTodoDone } from "@/features/todos/updateTodoDone";
import { Input } from "./ui/input";

interface TodoItemProps {
  todo: TodoItemType;
}

const CATEGORY_MAP = {
  namu: "나무위키",
  mukbang: "먹방",
  game: "게임",
};

const ICON_MAP = {
  namu: "/namu.webp",
  mukbang: "/mukbang.jpg",
  game: "/game.png",
};

type CategoryKey = keyof typeof CATEGORY_MAP;
type UpdateTodoInput = { id: number; newIsDone: boolean | number };

import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "./ui/button";
import Image from "next/image";

const TodoItem: React.FC<TodoItemProps> = ({ todo }: TodoItemProps) => {
  const [isDone, setIsDone] = useState<boolean>(todo.done);
  const { deleteItem } = useDeleteTodo();
  const { mutate: updateDone } = UpdateTodoDone();

  const handleDone = () => {
    const newIsDone = !isDone;
    setIsDone(newIsDone);
    const temp: UpdateTodoInput = { id: todo.id, newIsDone: newIsDone };
    updateDone(temp);
  };

  const categoryName: CategoryKey = todo.categoryName as CategoryKey;

  return (
    <TableRow>
      <TableCell>
        <Input
          type="checkbox"
          checked={isDone}
          onChange={handleDone}
          className="w-[20px] mr-4"
        />
      </TableCell>
      <TableCell>
        <Image
          src={ICON_MAP[categoryName] || "Unknown Category"}
          width={32}
          height={32}
          alt="카테고리 아이콘"
        />
      </TableCell>
      <TableCell>
        <p className={`w-[223px] text-left ${isDone ? "line-through" : ""}`}>
          {todo.content}
        </p>
      </TableCell>
      <TableCell>
        <p className="">{todo.userNick}</p>
      </TableCell>
      <TableCell>
        <Button className="" onClick={() => deleteItem(todo.id)}>
          삭제
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default TodoItem;
