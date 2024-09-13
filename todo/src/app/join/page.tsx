"use client";
import { PostJoin } from "@/features/auth/postJoin";
import React, { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("example@gmail.com");
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: postJoin, isPending } = PostJoin();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    postJoin([email, nick, password]);
  };

  return (
    <div>
      <h1>JOIN</h1>
      {/* <form id="join-form" action="/auth/join" method="post"> */}
      <form id="join-form" onSubmit={submitHandler}>
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
          <label htmlFor="join-nick">닉네임</label>
          <input
            id="join-nick"
            type="text"
            name="nick"
            value={nick}
            onChange={(e) => setNick(e.target.value)}
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
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Page;
