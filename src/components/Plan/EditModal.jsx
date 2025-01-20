import React from 'react'
import BtnPrimary from '../BtnPrimary'
import { useState } from 'react'
import { useContext } from 'react'
import { MyContext } from '../../services/MyContext'
import Modal from '../Modal'

const categoryObj = {
    "PR" : "Programming",
    "EN" : "English",
    "PG" : "Personal Growth",
    "EX" : "Exercise",
}

export default function EditModal({taskInfo , setTaskInfo}) {
    const [spanValue, setSpanValue] = useState(taskInfo.span)
    const [titleValue, setTitleValue] = useState(taskInfo.title)
    const [categoryValue, setCategoryValue] = useState(taskInfo.category)
    const [state,dispatch] = useContext(MyContext)
    

    function editHandle() {
        const newState = {...state}
        newState.tasks.map(task=>{
            if(task.id === taskInfo.id){
                task.span = Number(spanValue) ;
                task.title = titleValue
                task.category = categoryValue
            }
        })
        setTaskInfo(undefined)
        dispatch({type:'all',payload:newState})
    }

  return (
    <Modal divClickFunction={()=>setTaskInfo(undefined)} openStatus={taskInfo}>
        <h4 className='text-myWhite text-2xl mb-5'><strong className='text-primary underline'>Edit</strong> your task inof</h4>
        <div className='flex flex-col gap-5'>
            <label >
                <p>Span:</p>
                <input value={spanValue} onChange={e=>setSpanValue(e.target.value)} type="number" placeholder='span...' className='bg-sections placeholder:text-icon bg-gradient-to-tl from-myWhite/5 p-3 rounded-xl shadow-inner shadow-black/70 outline-none myShadow' />
            </label>

            <label>
                <p>Title:</p>
                <input value={titleValue} onChange={e=>setTitleValue(e.target.value)} type="text" placeholder='Title...' className='bg-sections placeholder:text-icon bg-gradient-to-tl from-myWhite/5 p-3 rounded-xl shadow-inner shadow-black/70 outline-none myShadow' />
            </label>

            <label>
                <p>Category:</p>
                <select onChange={e=>setCategoryValue(e.target.value)} value={categoryValue} className='bg-sections placeholder:text-icon bg-gradient-to-tl from-myWhite/5 p-3 rounded-xl shadow-inner shadow-black/70 outline-none myShadow w-full' name="editCategory">
                    {
                        Object.entries(categoryObj).map(([key , value])=>{
                            return <option  key={key} value={key}>{value}</option>
                        })
                    }
                </select>
            </label>

            <BtnPrimary onClick={editHandle}>Submit Changes</BtnPrimary>
        </div>
    </Modal>
  )
}
