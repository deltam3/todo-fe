import axios from "axios";
axios.defaults.withCredentials = true;

import { User } from "../../types/todos";

export async function postJoin(user: {
  email: string;
  nick: string;
  password: string;
}): Promise<User> {
  try {
    const response = await axios.post<User>(
      `${process.env.NEXT_PUBLIC_SERVER_URl}/auth/login`,
      {
        email: user.email,
        nick: user.nick,
        password: user.password,
      }
    );

    return response.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      throw new Error(err.response?.data?.message || "에러 발생");
    } else {
      throw new Error("알 수 없는 에러 발생");
    }
  }
}

export const login = async (user: {
  email: string;
  password: string;
}): Promise<{ data: User } | { error: string }> => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URl}/auth/login`,
      {
        email: user.email,
        password: user.password,
      }
    );

    return response.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      return { error: err.response?.data?.message || "로그인 실패" };
    } else {
      return { error: "예상치 못한 에러 발생" };
    }
  }
};
