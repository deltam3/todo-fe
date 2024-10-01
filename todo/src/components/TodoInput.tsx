"use client";

import { useState, useEffect } from "react";
import { PostTodo } from "@/features/todos/postTodos";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";

const TodoInput = () => {
  const [todoContent, setTodoContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { mutate, isPending } = PostTodo();
  const { toast } = useToast();

  const [hasUser, setHasUser] = useState(false);

  useEffect(() => {
    const userData = window.localStorage.getItem("user");
    if (userData) {
      setHasUser(true);
    }
  }, []);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!hasUser) {
      toast({
        title: "에러 발생",
        description: "로그인 후 사용해주세요",
        variant: "destructive",
      });
      return;
    }
    if (todoContent.trim() === "" || selectedCategory === "") {
      toast({
        title: "에러 발생",
        description: "내용과 카테고리를 반드시 선택해주세요",
        variant: "destructive",
      });
      return;
    }
    mutate({ content: todoContent, category: selectedCategory });
    setTodoContent("");
  };

  const handleSelectChange = (value: string) => {
    setSelectedCategory(value);
  };

  return (
    <form onSubmit={submitHandler} className="flex gap-2 px-[0.6rem]">
      <Input
        type="text"
        value={todoContent}
        onChange={(e) => setTodoContent(e.target.value)}
        className="border-yellow-500 border-[3px]"
      />
      <Select onValueChange={handleSelectChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="카테고리" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="namu">나무위키</SelectItem>
          <SelectItem value="mukbang">먹방</SelectItem>
          <SelectItem value="game">게임</SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit" loadingText="로딩" isLoading={isPending}>
        제출
      </Button>
    </form>
  );
};

export default TodoInput;
