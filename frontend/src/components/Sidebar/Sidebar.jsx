import React from 'react'
import {BiSearchAlt2} from "react-icons/bi"
const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
     <form action="" className='flex items-center gap-2'>
      <input className='input input-bordered rounded-md text-white' type="text" placeholder='Search' />
      <button type='submit' className='btn bg-zinc-500'><BiSearchAlt2 size="24px" className='w-6 h-6 outline-none'/></button>
     </form>
     <div className='divider px-3'></div>
     
    </div>
  )
}

export default Sidebar
