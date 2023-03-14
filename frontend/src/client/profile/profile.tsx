import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

const Profile = () => {
  const user = useSelector((state: RootState) => state.accounts.user);
  const status = useSelector((state: RootState) => state.accounts.status);
  if (status === "loading") {
    return (
      <h1 className="mt-24 text-center text-6xl text-[#F3EFE6]">Loading...</h1>
    );
  }

  return (
    <div className="h-2/3 flex flex-col items-center text-[#F3EFE6]">
      <div className="mt-24 text-center">
        <h1 className="text-4xl font-bold">Welcome {user.name || "No data"}</h1>
        <h2 className="text-2xl">{user.email || "No data"}</h2>
        <h3>Since - {user.created_at?.slice(0, 10) || "No data"}</h3>
      </div>
      <div></div>
    </div>
  );
};

export default Profile;
