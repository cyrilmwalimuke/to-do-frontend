import React, { useEffect, useState } from 'react'
import { CiCircleCheck } from 'react-icons/ci'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import SingleTask from './SingleTask'

export default function Tasks() {
    const [tasks,setTasks] = useState([])
    console.log(tasks)

 

    useEffect(() => {
        const fetchTasks = async ()=>{
            const res = await fetch("https://to-do-app-1-54rl.onrender.com/get")
            const data = await res.json()
            setTasks(data)
        }
        fetchTasks()
      },[tasks])

  return (
    <div className='mt-5'>

        {tasks.map((task)=>{
            return <SingleTask id={task._id} title={task.title} key={task._id}/>
        })}

   

  


  </div>)
}
