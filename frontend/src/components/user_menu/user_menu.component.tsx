import { FaDoorOpen } from "react-icons/fa";

const UserMenu = () => {
  return (
    <div className="w-52 absolute mt-2 p-2 right-20 md:right-10 bg-[#331508]/70 backdrop-blur-sm z-20 rounded">
      <div className="flex flex-col items-center text-center text-[#F3EFE6]">
        <h1 className="text-xl font-bold">User Menu</h1>
        <div className="w-full  flex flex-col items-center gap-4 text-center border-x border-[#D87D4A]">
          <button className="w-full font-bold py-1 hover:text-[#D87D4A] border-y  border-[#D87D4A]/50 hover:border-[#D87D4A]">
            Profile
          </button>
          <button className="w-full font-bold py-1 hover:text-[#D87D4A] border-y border-[#D87D4A]/50 hover:border-[#D87D4A]">
            Order Status
          </button>
        </div>

        <button className="mt-2 py-1 flex items-center justify-center gap-2 w-full bg-[#D87D4A] hover:bg-[#F3EFE6] text-[#F3EFE6] hover:text-[#70351B] font-bold rounded">
          <FaDoorOpen /> Logout
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
