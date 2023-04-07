import { useEffect, ComponentType } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Link } from "react-router-dom";

function WithAdmin(Component: ComponentType, hocProps?: any) {
  const user = useSelector((state: RootState) => state.accounts.user);
  const status = useSelector((state: RootState) => state.accounts.status);

  useEffect(() => {
    console.log("with admin");
  }, [user, status]);

  if (status === "idle") {
    return <h1>Loading...</h1>;
  } else {
    if (user.admin === 1) {
      return <Component {...hocProps} />;
    } else {
      return (
        <div className="w-full mt-12 p-2 flex flex-col items-center text-[#F3EFE6]">
          <h1 className="font-bold text-3xl">You are not an admin!</h1>
          <h2 className="text-2xl text-center">
            you don't have permission to access this page
          </h2>
          <h3 className="text-xl text-center">
            If you have an admin account, please log into it
          </h3>
          <Link
            to="/"
            className="mt-4 px-4 py-2 bg-[#D87D4A] hover:bg-[#70351B] font-bold text-3xl text-gray-50 rounded-xl flex items-center gap-2"
          >
            Homepage
          </Link>
        </div>
      );
    }
  }
}

export default WithAdmin;
