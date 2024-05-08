"use client";

const User = ({ params }) => {
  return (
    <div>
      <h1>Hello there, {params.user}</h1>
    </div>
  );
};

export default User;
