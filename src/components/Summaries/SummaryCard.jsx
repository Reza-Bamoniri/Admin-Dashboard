import React from 'react'

const SummaryCard = ({ title, value, Icon }) => {
  return (
    <article className="h-34.25 bg-white rounded-lg hover:bg-linear-to-t from-zinc-200/15 select-none cursor-pointer hover:shadow-md border flex justify-between flex-col primary-border-color shadow-sm py-[23.5px] px-4">
      <div className="flex items-center justify-between">
        <p>{title}</p>

        <div className="size-9 rounded-md border text-indigo-600 primary-border-color flex-center text-xl">
          {<Icon/>}
        </div>
      </div>
      <p className="text-4xl">
        <strong>{value}</strong>
      </p>
    </article>
  )
}

export default SummaryCard