import React from 'react'
import { useForm } from 'react-hook-form'

function Form({handleFormSubmit}) {
    const {register, handleSubmit,reset}=useForm()

    const handleFormSubmitData = (data)=>{
        
        handleFormSubmit(data);
        reset();

    }


  return (
    <div className='mt-10 flex gap-10 justify-center' >
        <form className=" bg-white flex  gap-10  p-6 shadow-lg rounded-lg" onSubmit={handleSubmit(handleFormSubmitData)} >
            <input  {...register('Name')}  className="field rounded-md px-2 py-1 text-base border border-gray-800  font-semibold" type="text" placeholder='Name' ></input>
            <input {...register('Email')}  className="field rounded-md px-2 py-1 text-base border border-gray-800 font-semibold" type="text" placeholder='Email' ></input>
            <input  {...register('url')} className="field rounded-md px-2 py-1 text-base border border-gray-800  font-semibold" type="text" placeholder='url' ></input>
            <input   className="rounded-md px-5 py-1 bg-blue-500 text-white font-semibold" type="submit" />
        </form>
    </div>
  )
}

export default Form