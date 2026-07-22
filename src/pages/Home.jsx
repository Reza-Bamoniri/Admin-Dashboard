import React from 'react'
import SectionTitle from '../components/common/SectionTitle'
import CallToAction from '../components/common/CallToAction'
import Summaries from '../components/Summaries/Summaries'
import DetailsCharts from '../components/DetailsCharts/DetailsCharts'
import LastProductTable from '../components/LastProductTable/LastProductTable'
import QuickOverview from '../components/QuickOverview/QuickOverview'
import { products } from '../data/products'

const Home = () => {
  return (
    <>
      <SectionTitle title="Dashboard" button={<CallToAction/>} />
      <Summaries />

      <div className="">
         <DetailsCharts />
        <LastProductTable allProducts={products} />
        <QuickOverview /> 
      </div>
    </>
  )
}

export default Home