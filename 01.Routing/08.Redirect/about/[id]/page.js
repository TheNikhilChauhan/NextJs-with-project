import { redirect } from "next/navigation";
import React from "react";

const Id = ({ params }) => {
  if (params.id == 4) {
    redirect("/login");
  }
  return (
    <div>
      <div>{params.id}</div>
    </div>
  );
};

export default Id;
