// import { login } from "@/services/apiAuth";
// import { useMutation, useQuery } from "@tanstack/react-query";
// import { useRouter } from "next/navigation";

// export function PostLogin() {
//   const router = useRouter();

//   const { mutate, isPending } = useMutation({
//     mutationFn: (user) => login(user),
//     onSuccess: (user) => {
//       console.log(user);
//     },
//     onError: (user) => {
//       console.error("Login failed:", error);
//     },
//   });

//   return { mutate, isPending };
// }

import { login } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function PostLogin() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: (user) => login(user),
    onSuccess: (user) => {
      console.log(user.data);

      window.localStorage.setItem("user", JSON.stringify(user.data));

      // invalidate other queries related to user data
      // queryClient.invalidateQueries('user');

      router.push("/");
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });

  return { mutate, isPending };
}
