import React from 'react'

const MessageContainer = () => {
  return (
    <div className="text-black md:min-w-[550px]  flex flex-col px-6 ">
      <div>
        <div>
          <div className="  justify-center " >
            <div className=" flex gap-2 text-white items-center bg-zinc-800  rounded-3xl cursor-pointer ">
              <div className="avatar online">
                <div className="w-12 rounded-full">
                  <img
                    src="https://avatar.iran.liara.run/public/boy/prateek"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col flex-1 ">
                <div className="flex justify-between gap-2"></div>
                <p className="text-xl leading-tight"> Prateek Verma</p>
              </div>
            </div>
            {/* <div className=" divider my-0 py-0 h-1"></div> */}
          </div>
        </div>
      </div>  
    </div>
  );
}

export default MessageContainer
