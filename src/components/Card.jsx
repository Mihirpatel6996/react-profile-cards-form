import React from 'react'

function Card({user,id,handleRemove}) {
  return (
     <div className='w-52 h-full bg-sky-300 rounded-2xl flex flex-col items-center p-2'>
        <div className="Image w-[3vw] h-[3vw] rounded-full bg-blue-600 overflow-hidden">
            <img className='w-full h-full object-cover ' src={user.url} alt="" />
        </div>
        <h1 className="mt-1 text-xl font-semibold text-center leading-none"> {user.Name}</h1>
        <h3 className='opacity-40 text-xs font-semibold' > {user.Email} </h3>
        <p className="mt-2 text-center text-xs font-semibold leading-4 tracking-tight"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae sit perferendis repellendus.</p>
        <button onClick={()=>handleRemove(id)} className="px-3 py-1 mt-3 bg-red-600 text-xs rounded-md font-semibold text-white"> Remove it </button>
    </div>
   

)}

export default Card