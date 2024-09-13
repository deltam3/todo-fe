"use client";
import React, { useState } from "react";
import { PostLogin } from "../../../src/features/auth/login";
const Page = () => {
  const [email, setEmail] = useState("example@gmail.com");
  const [password, setPassword] = useState("password");

  const { mutate: postLogin, isPending } = PostLogin();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    postLogin([email, password]);
  };

  return (
    <div>
      <h1>JOIN</h1>
      <form id="login-form" onSubmit={submitHandler}>
        <div>
          <label htmlFor="join-email">이메일</label>
          <input
            id="join-email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="join-password">비밀번호</label>
          <input
            id="join-password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <button type="submit" onClick={submitHandler}>
          로그인
        </button>
      </form>
    </div>
  );
};

export default Page;
