"use client";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useQueryClient } from "@tanstack/react-query";

const Navbar = () => {
  // const { getUser } = getKindeServerSession();
  // const user = await getUser();
  // const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  const queryClient = useQueryClient();

  // Access the user data from the cache
  const user = queryClient.getQueryData("user");

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
              <p>{user.nick}</p>
              <p>{user.email}</p>
            </>
          )}
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
