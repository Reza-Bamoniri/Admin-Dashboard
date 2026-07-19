import React from 'react'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { generateSummariesInfo } from '../utils/SummariesInfo';

const DetailsCharts = () => {


    const summaries = generateSummariesInfo(4, 200, 80, 3);

  return (
    <div className="p-5 space-y-10 bg-white border rounded-xl primary-border-color mt-7">
            <p className='text-lg'>General statistics</p>

            <div className="w-full h-100">
                <ResponsiveContainer>
                    <BarChart data={summaries}>
                        <Bar dataKey="value" fill="oklch(51.1% 0.262 276.966)"/>
                        <XAxis dataKey="title"/>
                        <YAxis/>
                        <Tooltip/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
    </div>
  )
}

export default DetailsCharts