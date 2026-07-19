import React from 'react'
import SearchInput from './SearchInput'
import Notification from './Notification'
import Divider from './Divider'
import Profile from './Profile'

const Header = () => {
  return (
    <div className='w-full flex justify-between relative z-10 *:gap-3 items-center shadow-[inset_0_-8px_10px_-10px_rgba(11,61,136,0.9)] h-35'> 
          <div>
               <SearchInput/>
          </div>



          <div className='flex items-center'>
              <Notification/>
              <Divider/>
              <Profile/>
          </div>
    </div>
  )
}

export default Header