"use client";
import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"], weight: "500" });
const Home = () => {
  return (
    <div>
      <section>
        <h1 className={roboto.className}>Fonts</h1>
        <h2 className={roboto.className}>
          Hello there, today I&apos;m using Roboto font.
        </h2>
      </section>
    </div>
  );
};

export default Home;
