import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <div className='w-full flex bg-slate-600 justify-between items-center p-4'>
      <Link className='text-white font-extrabold text-xl' href={'/'}> Todo App </Link>
      <Link className='py-2 px-4 rounded-sm font-bold bg-white' href={'/AddTopic'}>Add Topic</Link>
    </div>
  )
}
