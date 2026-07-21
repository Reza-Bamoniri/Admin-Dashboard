import React from 'react'
import LastProducts from './LastProducts'
import LastUsers from './LastUsers'

const QuickOverview = () => {
  return (
    <div className="space-y-10 grid grid-cols-5 *:p-5 *:border my-12 *:primary-border-color *:bg-white *:rounded-xl gap-5 *:shadow">
        <LastProducts/>

        <LastUsers/>
    </div>
  )
}

export default QuickOverview