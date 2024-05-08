"use client";
import { useRouter } from "next/navigation";

const Colors = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-center items-center flex-col text-center ">
        This is a Colors Page
        <button
          className="bg-red-500 m-[3rem]
        px-2 py-2 border"
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </div>
    </>
  );
};

export default Colors;
