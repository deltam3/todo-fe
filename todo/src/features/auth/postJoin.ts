import { postJoin } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function PostJoin() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: (user) => postJoin(user),
    onSuccess: () => {
      router.push("/");
    },
    onError: (user) => {},
  });

  return { mutate, isPending };
}
