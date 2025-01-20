import { createContext, useEffect, useReducer, useState } from "react";
import { getTasks } from "./HttpsClient";
import CalculateProgress from "../utils/CalculateProgress";

export const MyContext = createContext();

const initialState  = {
  "progress": {
    total : {quantity:0 , color : "#B273FF" ,  title : "total"},
    PR : {quantity:0 , color : "#FFD700" ,  title : "programming"},
    EN : {quantity:0 , color : "#007BFF" ,  title : "english"},
    PG : {quantity:0 , color : "#00B74A" ,  title : "personal growth"},
    EX : {quantity:0 , color : "#FF4C4C" ,  title : "exercise"},
  },
  "startTime": "",
  "tasks": []
}

function reducer(state ,action) {
    switch (action.type) {
      case "progress":
          return {...state , progress :  action.payload};
      case "startTime":
          return {...state , startTime : action.payload};
      case "addTask":
          return {...state , tasks : [...state.tasks , action.payload]};
      case "toggelComplete":
        return {...state , tasks : state.tasks.map(task=>task.id === action.payload ? {...task , isComplete : !task.isComplete} : task)}
      case "all":
        return action.payload
        case "removeTaskViaID":
          let newTasks = [...state.tasks];
          if (!Boolean(newTasks.length-1)) {
            return initialState
          }
          newTasks = newTasks.filter(task=>task.id !== action.payload)
          return {...state, tasks:newTasks}
      default:
        return initialState
    }
}

export default function MyProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async()=>{
      await getTasks().then((res) => {
          dispatch({
            type:"all",
            payload : res.data.record
          })
      }).catch(err=>{
        dispatch({type:'error'})
      })
      setIsLoading(false)
    };
    fetchData()
  }, []);

  useEffect(() => {
    const newProgress = CalculateProgress(state);
    if (JSON.stringify(newProgress) !== JSON.stringify(state.progress)) { // فرض کنید state.progress جایی است که پیشرفت ذخیره می‌شود
        dispatch({ type: 'progress', payload: newProgress });
    }
}, [state]);

  return <MyContext.Provider value={[state ,dispatch ,isLoading  , setIsLoading]}>{children}</MyContext.Provider>;
}