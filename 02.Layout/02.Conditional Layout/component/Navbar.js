"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div>
      {pathName !== "/login/adminLogin" ? (
        <li>
          <Link href="/login/userLogin">User Login</Link>
        </li>
      ) : (
        <li>
          <Link href="/login/adminLogin">Admin Login</Link>
        </li>
      )}
      <ul className="login-menu">
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
