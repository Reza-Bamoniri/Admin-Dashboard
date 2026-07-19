import React from 'react'
import SectionTitle from '../components/common/SectionTitle'
import CallToAction from '../components/common/CallToAction'

const Home = () => {
  return (
    <>
      <SectionTitle title="Dashboard" button={<CallToAction/>} />
      {/* <Summaries /> */}

      <div className="">
        {/* <DetailsCharts />
        <ProductsTable />
        <QuickOverview /> */}
      </div>
    </>
  )
}

export default Home