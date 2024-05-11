import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <ul className="login-menu">
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/login/userLogin">User Login</Link>
        </li>
        <li>
          <Link href="/login/adminLogin">Admin Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
