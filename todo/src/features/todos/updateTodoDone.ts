import { updateTodoDone } from "@/services/apiTodos";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function UpdateTodoDone() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (temp) => updateTodoDone(temp),
    onSuccess: (todo) => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (todo) => {},
  });

  return { mutate, isPending };
}
