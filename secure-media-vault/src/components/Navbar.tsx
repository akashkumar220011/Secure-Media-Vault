import type { FC } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

const Navbar: FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className=" flex items-center  justify-between ">

        <h1 className="text-xl font-semibold">Secure Media Vault</h1>
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
        <span className="text-gray-700 font-medium">{user?.email}</span>
      </div>
    </div>
    </nav>
    
  );
};

export default Navbar;
