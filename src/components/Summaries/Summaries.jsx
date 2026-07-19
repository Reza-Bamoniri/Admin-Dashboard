import React from 'react'
import { generateSummariesInfo } from '../utils/SummariesInfo';
import SummaryCard from './SummaryCard';

const Summaries = () => {


    const summaries = generateSummariesInfo(4, 200, 80, 3);


  return (
    
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-5 mt-6">
      {
        summaries.map((summary) => {
            return <SummaryCard key={summary.id} {...summary} />
        })
      }
    </div>
  )
}

export default Summaries