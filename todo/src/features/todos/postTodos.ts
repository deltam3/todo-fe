import { createTodo } from "@/services/apiTodos";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function PostTodo() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (todo) => createTodo(todo),
    onSuccess: (todo) => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (todo) => {},
  });

  return { mutate, isPending };
}
