import React from 'react'
import SidebarHeader from './SidebarHeader'
import SidebarMenu from './SidebarMenu'
import sideMenu from '../../data/sideMenu'

const Sidebar = () => {
  return (
    <div className=' w-68 h-screen z-10 sticky top-0 p-6 shadow-blue-950 shadow-2xl'>
      <SidebarHeader/>
      <SidebarMenu menuContent={sideMenu} />
    </div>
  )
}

export default Sidebar