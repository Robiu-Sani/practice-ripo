import React from 'react'

export default function page() {
  return (
    <form className='w-full md:w-1/2 mx-auto mt-10 p-10 rounded-md bg-neutral-300 shadow-md'>
        <h3 className='text-center font-bold mb-4 text-neutral-600 text-2xl'>Add Todo</h3>
      <input type="text" className='p-3 shadow-md rounded-md w-full mb-7' placeholder='Todo title'/>
      <textarea className='p-3 rounded-md shadow-md w-full h-32 mb-7' placeholder='Todo Description'></textarea>
      <input type="Submit" className='font-bold cursor-pointer shadow-md p-3 rounded-md w-full bg-white' value="Add Todo" />
    </form>
  )
}
