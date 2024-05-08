import React from "react";

const Project = ({ params }) => {
  return (
    <div>
      <h1>Project {params.all.join("/")}</h1>
      <br />
      All Routes
      {params.all.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </div>
  );
};

export default Project;
