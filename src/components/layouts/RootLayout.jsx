import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router'
import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"

const RootLayout = () => {
  return (
    <>
      <div className='flex'>
           <Sidebar/>


           <Header/>


             <main>

               <Outlet/>

             </main>
      </div>
    

    <ScrollRestoration/>
    </>
  )
}

export default RootLayout