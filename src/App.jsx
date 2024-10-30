import React, { useState } from 'react'
import { CiCircleCheck } from 'react-icons/ci'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import Tasks from './components/Tasks'



export default function App() {

  const [formData,setFormData]  = useState({})

  const handleChange = (e) =>{
    setFormData({...formData,[e.target.id]:e.target.value})

  }

  const handleSubmit = async(e) =>{
    e.preventDefault()
    const res = await fetch('https://to-do-app-1-54rl.onrender.com/create',
      {
        method:'POST',
        headers:{
        "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      }
    )

    const data = await  res.json()
    console.log(data)
  }
  return (
<div className='p-5  w-full flex flex-col items-center justify-center '>
  <p className='mb-5 font-bold text-6xl underline'>to do app</p>
  <form className='flex gap-2'onSubmit={handleSubmit}>
    <input type="text" placeholder='Whats on your mind...' onChange={handleChange} id='title'/>
    <button className='bg-blue-500 rounded-md p-1'>add</button>
  </form>

  <Tasks/>
 

</div>





    
  )
}
