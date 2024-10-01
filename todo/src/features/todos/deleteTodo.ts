import { useToast } from "@/hooks/use-toast";
import { deleteTodo } from "@/services/apiTodos";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteTodo() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { mutate: deleteItem, isPending } = useMutation({
    mutationFn: (id: number) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (err) => {
      toast({
        title: "에러 발생",
        description: `${err}`,
        variant: "destructive",
      });
    },
  });

  return { deleteItem, isPending };
}
