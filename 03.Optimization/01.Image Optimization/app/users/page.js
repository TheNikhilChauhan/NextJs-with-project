import RossImage from "@/public/ross.jpg";
import Image from "next/image";

const Users = () => {
  return (
    <div>
      <Image src={RossImage} alt="MikeRoss" width={500} height={500} />
      <Image
        src="https://images.unsplash.com/photo-1598207981454-d849f4ac3a9e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="nature image"
        width={500}
        height={500}
      />
    </div>
  );
};

export default Users;
