import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import TotalBox from '../components/Dashboard/TotalBox'
import BarChart from "../components/Dashboard/BarChart"
import HollowChart from "../components/Dashboard/HollowChart"
import AddProfile from '../components/Dashboard/AddProfile'
import '../styles/Dashboard/Dashboard.css'

const DashboardPage = () => {
  return (
    <div>
      <Dashboard />
      <TotalBox />
      <BarChart />
      <div className='page-container'>
      <HollowChart />
      <AddProfile />
      </div>
      
    </div>
  )
}

export default DashboardPage
