import React, { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BtnPrimary from "../BtnPrimary";
import Modal from "../Modal";
import { MyContext } from "../../services/MyContext";
import { postDays, postTasks } from "../../services/HttpsClient";

export default function Btn() {
  const [state] = useContext(MyContext)
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)

  function defaultPostHandler() {
    setIsLoading(true)
    const promise = postTasks(state)
    
    toast.promise(promise, {
      pending: 'Promise is pending',
      success: 'Promise resolved 👌',
      error: 'Promise rejected 🤯'
    });
    
    promise.then(response => {
      ///
    }).catch(error => {
      console.error(error);
    }).finally(()=>{
      setIsModalOpen(false)
      setIsLoading(false)
    })
  }

  function postDaysHandler(day) {
    setIsLoading(true)
    const promise = postDays(state , day)
    
    toast.promise(promise, {
      pending: 'Promise is pending',
      success: 'Promise resolved 👌',
      error: 'Promise rejected 🤯'
    });
    
    promise.then(response => {
      ///
    }).catch(error => {
      console.error(error);
    }).finally(()=>{
      setIsModalOpen(false)
      setIsLoading(false)
    })
  }

  



  return (
    <>
      <BtnPrimary className={'p-0 duration-200 w-min max-w-0 overflow-hidden group-hover:py-3 group-hover:px-6 group-hover:max-w-full hover:myShadow'} disabledStatus={isLoading} onClick={()=>setIsModalOpen(true)}>{
      isLoading ? 
      <svg className="h-7 fill-myWhite animate-spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <defs>
          <style dangerouslySetInnerHTML={{__html: ".fa-secondary{opacity:.4}" }} />
        </defs>
        <path className="fa-secondary" d="M0 256C0 114.9 114.1 .5 255.1 0C237.9 .5 224 14.6 224 32c0 17.7 14.3 32 32 32C150 64 64 150 64 256s86 192 192 192c69.7 0 130.7-37.1 164.5-92.6c-3 6.6-3.3 14.8-1 22.2c1.2 3.7 3 7.2 5.4 10.3c1.2 1.5 2.6 3 4.1 4.3c.8 .7 1.6 1.3 2.4 1.9c.4 .3 .8 .6 1.3 .9s.9 .6 1.3 .8c5 2.9 10.6 4.3 16 4.3c11 0 21.8-5.7 27.7-16c-44.3 76.5-127 128-221.7 128C114.6 512 0 397.4 0 256z" />
        <path className="fa-primary" d="M224 32c0-17.7 14.3-32 32-32C397.4 0 512 114.6 512 256c0 46.6-12.5 90.4-34.3 128c-8.8 15.3-28.4 20.5-43.7 11.7s-20.5-28.4-11.7-43.7c16.3-28.2 25.7-61 25.7-96c0-106-86-192-192-192c-17.7 0-32-14.3-32-32z" />
      </svg>

      : "Save"
      }</BtnPrimary>
      <Modal divClickFunction={()=>setIsModalOpen(false)} openStatus={isModalOpen}>
        <div className="flex flex-col gap-2">
        <h4>Please choose day :</h4>
          <ul className="*:bg-primary hover:*:brightness-125 *:transition-all *:duration-150 *:cursor-pointer *:border-2 *:border-background *:p-2 text-sections text-lg font-bold flexCenter rounded-xl overflow-hidden">
            {
              ['SUN','MON','TUE','WED','THU','FRI','SAT'].map(day=>{
                return <li onClick={()=>postDaysHandler(day)} key={day}>{day}</li>
              })
            }
          </ul>

          <BtnPrimary onClick={defaultPostHandler} className={'hover:brightness-110'}>Save as default</BtnPrimary>
        </div>
      </Modal>
      <ToastContainer theme="dark" position="top-center" />
    </>
  );
}


////////////////////////////////////////
///                                 ////
///             توضیحات              ////
///    اینجا قراره روز ها برای سیو بیاد     ////
///           progress bug          ////
///                                 ////
////////////////////////////////////////