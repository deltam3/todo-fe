import { useToast } from "@/hooks/use-toast";
import { updateTodoDone } from "@/services/apiTodos";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function UpdateTodoDone() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { mutate, isPending } = useMutation({
    mutationFn: (temp: { id: number; newIsDone: boolean | number }) =>
      updateTodoDone(temp),
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
