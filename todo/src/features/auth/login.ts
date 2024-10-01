import { useToast } from "@/hooks/use-toast";
import { login } from "@/services/apiAuth";
import { useMutation } from "@tanstack/react-query";

import { useRouter } from "next/navigation";

export function PostLogin() {
  const router = useRouter();
  const { toast } = useToast();

  const { mutate, isPending } = useMutation({
    mutationFn: (user: { email: string; password: string }) => login(user),
    onSuccess: (user) => {
      if (user) {
        window.localStorage.setItem("user", JSON.stringify(user));
        router.push("/");

        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    },
    onError: (error) => {
      toast({
        title: "에러 발생",
        description: `${error}`,
        variant: "destructive",
      });
    },
  });

  return { mutate, isPending };
}
