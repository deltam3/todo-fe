import { useToast } from "@/hooks/use-toast";
import { postJoin } from "@/services/apiAuth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface User {
  email: string;
  nick: string;
}

export function PostJoin() {
  const router = useRouter();
  const { toast } = useToast();

  const { mutate, isPending } = useMutation<
    User,
    Error,
    { email: string; nick: string; password: string }
  >({
    mutationFn: (user) => postJoin(user),

    onSuccess: (user) => {
      window.localStorage.setItem("user", JSON.stringify(user));
      router.push("/");
      setTimeout(() => {
        window.location.reload();
      }, 600);
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
