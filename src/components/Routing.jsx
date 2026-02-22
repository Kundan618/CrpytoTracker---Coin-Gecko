import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import CustomErrorboundary from './CustomErrorboundary'
const Home = lazy(() => import('../pages/Home'))
const CoinDetailsPage = lazy(() => import('../pages/CoinDetailsPage'))
const Routing = () => {
  return (
   
  //  <CustomErrorboundary>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:coinId" element={<CoinDetailsPage />} />
    </Routes>
    // </CustomErrorboundary>
  
  )
}

export default Routing
