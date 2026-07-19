import React from 'react'

const SectionTitle = ({title, button}) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-700 font-IRANSansX">{title}</h2>
      </div>

      <div className="flex items-center gap-3">{button}</div>
    </div>
  )
}

export default SectionTitle