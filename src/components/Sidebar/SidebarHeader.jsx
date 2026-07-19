import React from 'react'
import { Link } from 'react-router'

const SidebarHeader = () => {
  return (
      
      <Link to="/">
       <div className='flex items-center gap-1.5 border-b border-blue-950 pb-1 border-dotted'>
           <img src="/images/logo.png" alt="logo" className='size-13' />
           <span>Admin panel</span>
       </div>
       </Link>

  )
}

export default SidebarHeader