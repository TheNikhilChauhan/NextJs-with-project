"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const navigate = (page) => {
    router.push(page);
  };

  return (
    <main>
      <h1>Routing | Navigation</h1>
      <ul>
        <Link className="border px-3 py-2" href="/login">
          Login
        </Link>{" "}
        <br />
        <Link className="border px-3 py-2" href="/about">
          About
        </Link>
      </ul>
      <button
        className="border bg-teal-500 px-2 py-2 m-[2rem]"
        onClick={() => router.push("/colors")}
      >
        Go to colors
      </button>
      {/* Alternative {create separate function} */}
      <button
        className="border bg-teal-500 px-2 py-2 m-[2rem]"
        onClick={() => navigate("login")}
      >
        Go to Login Page
      </button>
    </main>
  );
};

export default Home;
