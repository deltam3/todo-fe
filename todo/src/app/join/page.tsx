"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PostJoin } from "@/features/auth/postJoin";
import React, { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("example@gmail.com");
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isPending } = PostJoin();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    mutate({ email, nick, password });
  };

  return (
    <div className="max-w-[30rem] mx-auto py-4">
      <h1 className="text-bold text-[22px]">회원가입</h1>
      <form id="join-form" onSubmit={submitHandler}>
        <div>
          <Label htmlFor="join-email">이메일</Label>
          <Input
            id="join-email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="join-nick">닉네임</Label>
          <Input
            id="join-nick"
            type="text"
            name="nick"
            value={nick}
            onChange={(e) => setNick(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="join-password">비밀번호</Label>
          <Input
            id="join-password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-end py-4">
          <Button
            type="submit"
            loadingText="회원가입중..."
            isLoading={isPending}
          >
            회원가입
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Page;
