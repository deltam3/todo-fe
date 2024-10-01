"use client";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import axios from "axios";
import { Button } from "./ui/button";

import { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const data = window.localStorage.getItem("user");

    if (data) {
      try {
        const parsedData = JSON.parse(data);

        if (parsedData && parsedData.nick) {
          setUser(parsedData.nick);
        } else {
          console.warn("유저 데이터가 없습니다.:", parsedData);
        }
      } catch (error) {
        console.error("유저 데이터 파싱 실패:", error);
      }
    } else {
      console.log("localStorage에 유저 데이터가 없음");
    }
  });

  const deleteCookie = (name: string) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  };

  const handleLogout = async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URl}/auth/logout`, {
        withCredentials: true,
      });
      window.localStorage.removeItem("user");
      deleteCookie("connect.sid");
      window.location.reload();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper className="max-w-[40rem] px-[1rem]">
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <img src="/logo.png" className="w-[30%]" alt="Site Logo" />
          </Link>
          {!user && (
            <div className="flex gap-4">
              <Link href="/join">
                <Button>회원가입</Button>
              </Link>
              <Link href="/login">
                <Button>로그인</Button>
              </Link>
            </div>
          )}

          {user && (
            <div className="flex gap-4 align-middle">
              <p className="whitespace-nowrap my-auto">{user}님</p>
              <Button onClick={handleLogout}>로그아웃</Button>
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
