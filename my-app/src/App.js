import React from 'react'

import HomePage from './Pages/HomePage/Homepage'
import StartupForm from './Pages/StartupForm/StartupForm'
import InvestorForm from './Pages/InvestorForm/InvestorForm'
import Dashboard from './Pages/InvestorDashboard/Dashboard'
import InvDashboard from './Pages/InvDashboard/InvDashboard'
import StartUp from './Pages/StartUp/StartUp'



import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/investor/startuplist" element={<Dashboard />} />
        <Route exact path="/startup/register" element={<StartupForm />} />
        <Route exact path="/investor/register" element={<InvestorForm />} />
        <Route exact path="/investor/dashboard" element={<InvDashboard />} />
        <Route exact path="/startup" element={<StartUp />} />
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>

    // <InvDashboard/>

    
  )
}




export default App