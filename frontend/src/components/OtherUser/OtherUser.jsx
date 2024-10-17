import React from "react";
import useGetOtherUsers from "../../hooks/useGetOtherUsers";
import { setselectedUser } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const OtherUser = (props) => {
  const dispatch = useDispatch();
  const {selectedUser} = useSelector(store=>store.user)
  const user = props.user;

  const selectedUserHandler = (user) => {
    dispatch(setselectedUser(user)); 
  };
  return (
    <>
      <div
        onClick={() => selectedUserHandler(user)}
        className={` ${
          selectedUser?._id == user?._id ? "bg-zinc-600 text-white " : ""
        } m-2  flex gap-2 items-center      rounded-3xl cursor-pointer overflow-hidden text-black`}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src={`https://avatar.iran.liara.run/public/boy/${user.profilePhoto}`}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-2"></div>
          <p>{user?.fullName}</p>
        </div>
      </div>
      {/* <div className=" divider my-0 py-0 h-1"></div> */}
    </>
  );
};

export default OtherUser;
