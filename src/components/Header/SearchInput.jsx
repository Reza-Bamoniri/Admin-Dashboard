import React from 'react'
import { MdKeyboardCommandKey } from 'react-icons/md'

const SearchInput = () => {
  return (
    <div className="relative h-10 border rounded-lg primary-border-color w-[288px] flex items-center justify-center duration-150 focus-within:ring-4 focus-within:ring-blue-500/10 focus-within:border-blue-500/20! text-sm">
          <input
            type="text"
            className="absolute size-full focus-within:outline-none text-gray-700 placeholder:text-sm px-4"
            placeholder="Search..."
          />
    
          <div className="absolute right-4 flex-center gap-1 *:size-5 text-sm *:rounded-sm select-none *:bg-[#ECEFF3] *:flex-center text-[#1343b4]">
            <span>
              <MdKeyboardCommandKey />
            </span>
            <span>
              <kbd>K</kbd>
            </span>
          </div>
        </div>
  )
}

export default SearchInput