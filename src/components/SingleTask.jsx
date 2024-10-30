import React, { useState } from 'react'
import { CiCircleCheck } from 'react-icons/ci'
import { IoMdCloseCircleOutline } from 'react-icons/io'

export default function SingleTask({id,title}) {
    const [underlined,setUnderline] = useState(false)

    const handleTaskDelete = async () =>{
        const res = await fetch(`https://to-do-app-1-54rl.onrender.com/delete/${id}`,{
            method:'DELETE',
            headers:{
                "Content-Type":"application/json"
            }

        })
      }

    const handleCheck = () =>{
        setUnderline(true)

    }
  return (
    <div className='flex gap-2 mb-3'>
        <div className='bg-pink-300 p-1 rounded-md w-[200px]'><p className={`text-2xl ${underlined?'line-through':''}`}>{title}</p></div>
        <button onClick={handleCheck} className='text-green-400'><CiCircleCheck size={30}/></button>
        <button onClick={handleTaskDelete} className='text-red-400'><IoMdCloseCircleOutline size={30}/></button>
      </div>
    
        
  )
}
