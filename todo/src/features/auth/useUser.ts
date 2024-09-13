"use client";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../../services/apiTodos";

export function useTodos() {
  const {
    isPending,
    data: user,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getTodos,
  });

  return { isPending, error, todos };
}
