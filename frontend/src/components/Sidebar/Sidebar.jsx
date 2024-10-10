import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import OtherUsers from "../OtherUsers/OtherUsers";

const Sidebar = () => {
  return (
    <div className="w-full p-2 rounded-lg shadow-md h-full bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 border-rose-950 flex flex-col">
      {/* Search Bar */}
      <form action="" className="flex items-center gap-2 mb-4">
        <input
          className="w-full px-4 py-2 bg-zinc-800 text-white rounded-md border border-gray-600 focus:outline-none   "
          type="text"
          placeholder="Search"
        />
        <button
          type="submit"
          className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
        >
          <BiSearchAlt2 size="24px" className="w-6 h-6" />
        </button>
      </form>

      {/* Divider */}
      <div className="divider mb-4"></div>

      {/* Other Users with scroll but no scrollbar */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <OtherUsers />
      </div>
      <div className="mt-2  ">
        <button className=" btn bg-red-700 border-none text-white btn-sm">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
