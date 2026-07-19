import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router'
import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"
import BackgroundOverlay from '../common/BackgroundOverlay'

const RootLayout = () => {
  return (
    <>
      <div className='flex'>
           <Sidebar/>

           <section className="grow *:px-6">
           <Header/>

             <main className="mt-6 container mx-auto"> 
              
                 <div className='relative z-10'>
                   <Outlet/>
                 </div>
                   

                   <BackgroundOverlay/>
             </main>
           </section>


      </div>
    

    <ScrollRestoration/>
    </>
  )
}

export default RootLayout