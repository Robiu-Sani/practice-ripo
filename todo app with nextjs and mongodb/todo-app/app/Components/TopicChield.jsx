import Link from 'next/link'
import React from 'react'
import RemoveBtn from './RemoveBtn'
import {HiPencilAlt} from 'react-icons/hi'

export default function TopicChield() {
  return (
    <div className='bg-slate-400 p-4 rounded-md'>
      <summary>
      <h1 className='text-2xl mt-4 font-bold'>This is title</h1>
        <details>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, iusto.</details>
      </summary>
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-3 ">
            <small>12/12/24</small>
            <small>12:00 AM</small>
        </div>
        <div className="flex gap-2">
            <RemoveBtn />
            <Link href={'/editTopic'}> <HiPencilAlt size={24} /> </Link>
        </div>
      </div>
    </div>
  )
}

