import React from 'react'
import { NavLink } from 'react-router'

const SidebarMenu = ({menuContent}) => {
  return (
    <div className="space-y-3 mt-6">
        {
            menuContent.map((item)=>{
     return <div key={item.id}>
            <p className="text-xs text-gray-700 font-semibold">{item.title}:</p>
                 <div className='mt-2 *:w-full *:flex *:items-center *:gap-2 *:h-10 *:duration-150 *:hover:bg-gray-100 space-y-1  *:px-3 *:rounded-md text-gray-700'>
                    {
                        item.items.map((itm)=>{
                         return <NavLink key={itm.id} to={itm.href}
                         className={({isActive})=> isActive ?
                          "*:[svg]:text-blue-700! relative before:absolute before:-left-5 before:bg-blue-600 before:w-1 before:h-full  before:rounded-l-full bg-blue-400/10" 
                          : ""} >
                                     <itm.icon/>
                                     <span>{itm.title}</span>
                                </NavLink>
                        })
                    }
                 </div>         
            </div>
            })
        }
    </div>
  )
}

export default SidebarMenu