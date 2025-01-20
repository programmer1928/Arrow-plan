import React from 'react'
import { getDays } from '../services/HttpsClient'
import { useContext } from 'react'
import { MyContext } from '../services/MyContext';



export default function DayBtn({day}) {
    const [,dispatch ,, setIsLoading] = useContext(MyContext);

    async function daysGetDataHandler() {
        setIsLoading(true)
        await getDays().then((res) => {
            dispatch({
              type:"all",
              payload : res.data.record[day]
            })
        }).catch(err=>{
          dispatch({type:'error'})
        })
        setIsLoading(false)}

  return (
    <li className='text-lg'><button onClick={daysGetDataHandler}>{day}</button></li>
  )
}
