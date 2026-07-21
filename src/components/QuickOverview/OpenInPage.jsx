import React from 'react'
import { Link } from 'react-router'

const OpenInPage = ({route}) => {
  return (
    <div className="flex items-center justify-end  mt-5 pt-4 ">
        <Link to={route || "/"} className="primary-bg text-white text-sm px-3 py-1.5 rounded-md">
        Show More</Link>
    </div>
  )
}

export default OpenInPage