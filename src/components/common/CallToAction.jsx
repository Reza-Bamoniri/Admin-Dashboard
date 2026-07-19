import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const CallToAction = () => {

    const navigate = useNavigate()
    const [isRedirecting, setIsRedirecting] = useState(false)

    const handleClick = () => {

        setIsRedirecting(!isRedirecting)
             setTimeout(() => {
                navigate("/products")
             }, 1000);
    }

  return (
    <button
        onClick={handleClick}
        className="bg-blue-700 px-4 py-2 text-sm rounded-md cursor-pointer hover:opacity-90 text-white"
      >
        {isRedirecting ? "Loading" : "Add Product"}
      </button>
  )
}

export default CallToAction