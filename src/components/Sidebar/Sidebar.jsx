import React from 'react'
import SidebarHeader from './SidebarHeader'

const Sidebar = () => {
  return (
    <div className=' w-68 h-screen z-10 sticky bottom-0 p-6 shadow-blue-950 shadow-2xl'>
      <SidebarHeader/>
    </div>
  )
}

export default Sidebar