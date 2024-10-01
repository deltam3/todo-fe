"use client";
import React, { useState } from "react";
import { PostLogin } from "../../../src/features/auth/login";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
const Page = () => {
  const [email, setEmail] = useState("example@gmail.com");
  const [password, setPassword] = useState("password");

  const { mutate: postLogin, isPending } = PostLogin();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    postLogin({ email, password });
  };

  return (
    <div className="max-w-[30rem] mx-auto py-4">
      <h1 className="text-bold text-[22px]">로그인</h1>
      <form id="login-form" onSubmit={submitHandler}>
        <div>
          <Label htmlFor="join-email">이메일</Label>
          <Input
            id="join-email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
        </div>
        <div>
          <Label htmlFor="join-password">비밀번호</Label>
          <Input
            id="join-password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
        </div>
        <div className="flex justify-end py-4">
          <Button type="submit" loadingText="로그인중" isLoading={isPending}>
            로그인
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Page;
