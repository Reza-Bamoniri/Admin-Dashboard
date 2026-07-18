import React from 'react'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <>
    <h1>Hello</h1>
    <Outlet/>
    </>
  )
}

export default RootLayout