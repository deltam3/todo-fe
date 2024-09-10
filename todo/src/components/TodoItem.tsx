import React, { useState } from "react";
import { TodoItemType } from "../../types/todos";
import { useDeleteTodo } from "@/features/todos/deleteTodo";
import { UpdateTodoDone } from "@/features/todos/updateTodoDone";

interface TodoItemProps {
  todo: TodoItemType;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [isDone, setIsDone] = useState<boolean>(todo.done);
  const { deleteItem } = useDeleteTodo();
  const { mutate: updateDone, isPending } = UpdateTodoDone();

  const handleDone = () => {
    setIsDone((prevState) => !prevState);
    const temp = [todo.id, isDone];
    updateDone(temp);
  };

  return (
    <li>
      <div className="flex justify-between">
        <p className={`${isDone ? "line-through" : ""}`}>{todo.content}</p>
        <div>
          <button onClick={handleDone}>{!isDone ? "완성" : "미완성"}</button>
          <button onClick={() => deleteItem(todo.id)}>삭제</button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
