"use client";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Navbar = () => {
  const [user, setUser] = useState();
  const router = useRouter();

  useEffect(() => {
    const data = window.localStorage.getItem("user");

    if (data) {
      try {
        const parsedData = JSON.parse(data);

        if (parsedData && parsedData.nick) {
          setUser(parsedData.nick);
        } else {
          console.warn("User data is missing expected properties:", parsedData);
        }
      } catch (error) {
        console.error("Failed to parse user data:", error);
      }
    } else {
      console.log("No user data found in localStorage.");
    }
  }, []);

  function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  }

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8001/auth/logout");

      window.localStorage.removeItem("user");
      deleteCookie("sessionCookie");
      window.location.reload();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <img src="/logo.png" className="w-[30%]" />
          </Link>
          {!user && (
            <>
              <Link href="/join">회원가입</Link>
              <Link href="/login">로그인</Link>
            </>
          )}

          {user && (
            <>
              <p>{user}</p>
              <button onClick={handleLogout}>로그아웃</button>
            </>
          )}
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
