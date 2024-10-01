import { useToast } from "@/components/ui/use-toast";
import { createTodo } from "@/services/apiTodos";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function PostTodo() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { mutate, isPending } = useMutation({
    mutationFn: (todo: { content: string; category: string }) =>
      createTodo(todo),
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

  return { mutate, isPending };
}
