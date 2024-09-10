import { deleteTodo } from "@/services/apiTodos";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteTodo() {
  const queryClient = useQueryClient();

  const { mutate: deleteItem, isPending } = useMutation({
    mutationFn: (id) => deleteTodo(id),
    onSuccess: (todo) => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (todo) => {},
  });

  return { deleteItem, isPending };
}
