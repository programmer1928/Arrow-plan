import React, { useContext, useEffect, useState } from 'react'
import Container from '../Container'
import Task from './Task'
import Time from './Time'
import { minutesToTime , timeToMinutes } from '../../utils/TimeFormater'
import { MyContext } from '../../services/MyContext'
import EditModal from './EditModal'
import { useRef } from 'react'

export default function PlanTable() {
    const [tasks, setTasks]  =  useState(undefined);
    const [taskInfoForModal, setTaskInfoForModal] = useState(undefined)
    const [isEditable, setIsEditable] = useState(false)
    const [isRemoveable, setIsRemoveable] = useState(false)
    const currentTime = useRef(0)
    const [state] = useContext(MyContext)

    useEffect(()=>{
        setTasks(state.tasks);
    },[state])

  return (
    
      <Container className={'relative'}>
        {
            taskInfoForModal &&
            <EditModal taskInfo={taskInfoForModal} setTaskInfo={setTaskInfoForModal}></EditModal>
        }
        <button onClick={()=>{setIsRemoveable(false);setIsEditable(prev=>!prev)}} className={`fill-icon peer/edit flex duration-200 transition-all md:hover:pb-2 md:hover:border-primary md:hover:fill-primary  px-2 pt-1 absolute box-decoration-clone bottom-full translate-y-[1px] z-20 right-10 bg-[#1D2023] border-t-2 border-x-2  rounded-t-lg ${isEditable ? 'pb-2 border-primary fill-primary' : 'border-sections'}`}>
            <svg className='h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/>
            </svg>
        </button>
        <button onClick={()=>{setIsEditable(false);setIsRemoveable(prev=>!prev)}} className={`fill-icon peer/remove flex duration-200 transition-all md:hover:pb-2 md:hover:border-myRed md:hover:fill-myRed  px-2 pt-1 absolute box-decoration-clone bottom-full translate-y-[1px] z-20 right-[5.25rem] bg-[#1D2023] border-t-2 border-x-2  rounded-t-lg ${isRemoveable ? 'pb-2 border-myRed fill-myRed' : 'border-sections'}`}>
            <svg className='h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/>
            </svg>
        </button>
        <section className={`md:peer-hover/edit:border-primary md:peer-hover/remove:border-myRed duration-200 transition-all px-5 py-3 sectionStyle flex flex-wrap items-center text-lg gap-4 border overflow-hidden  ${isEditable ? '!border-primary' : isRemoveable ? '!border-myRed': 'border-sections'}`}>
            <Time className={isEditable || isRemoveable ? 'text-paragraph' : 'text-myWhite'}>{state.startTime}</Time>
            {
                !tasks ?<p>Loading...</p> : tasks.map((task , index)=>{
                    currentTime.current += task.span;
                    const newTime = minutesToTime(state.tasks.reduce((acc, task) => (acc.push(acc[acc.length - 1] + task.span), acc), [timeToMinutes(state.startTime)]).slice(1)[index]) /// 00:00
                    if(newTime !== "NaN:NaN"){
                        return <React.Fragment key={task.id}>
                            <Task removeMode={isRemoveable} editMode={isEditable} setEditMode={setIsEditable} setTaskInfo={setTaskInfoForModal}  {...task}/>
                            <Time className={isEditable || isRemoveable ? 'text-paragraph' : 'text-myWhite'}>{newTime}</Time>
                        </React.Fragment>
                    }
                })
                
            }
        </section>
    </Container>

  )
}
