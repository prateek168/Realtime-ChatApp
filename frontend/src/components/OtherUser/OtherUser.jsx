import React from "react";

const OtherUser = () => {
  return (
    <div>
      <div className=" flex gap-2 items-center hover:bg-zinc-500 rounded-md cursor-pointer overflow-hidden text-black">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://avatar.iran.liara.run/public/boy/prateek"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-2"></div>
          <p> Prateek Verma</p>
        </div>
      </div>
      {/* <div className=" divider my-0 py-0 h-1"></div> */}
    </div>
  );
};

export default OtherUser;
