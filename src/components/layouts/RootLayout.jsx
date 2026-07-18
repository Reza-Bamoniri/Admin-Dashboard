import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router'
import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"

const RootLayout = () => {
  return (
    <>

    <Header/>


    <Sidebar/>


    <main>

    <Outlet/>

    </main>

    <ScrollRestoration/>
    </>
  )
}

export default RootLayout