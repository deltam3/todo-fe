import axios from "axios";
axios.defaults.withCredentials = true;
export async function postJoin(user) {
  // console.log(user);
  try {
    await axios.post("http://localhost:8001/auth/join", {
      email: user[0],
      nick: user[1],
      password: user[2],
    });
  } catch (err) {
    console.log(err);
  }
}
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { useRouter } from "next/navigation";
export async function login(user) {
  // const queryClient = useQueryClient();
  // const router = useRouter();
  try {
    const response = await axios.post("http://localhost:8001/auth/login", {
      email: user[0],
      password: user[1],
    });
    // console.log(response);
    return response;
    // queryClient.setQueryData("user", user);
  } catch (err) {
    console.log(err);
  }
}
