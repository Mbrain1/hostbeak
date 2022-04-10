import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "components/Home";
import PurchaseBills from "components/dashboard/purchases/Bills";
import ResportsView from "components/dashboard/reports/View";
import DashboardLayout from "components/layouts";
import { routes } from "utils/enum";

const App = () => {
  return (
      <Routes>
            <Route path={routes.HOME} element={ <Home /> } /> 

            <Route path={routes.PURCHASES_BILL} element={ <DashboardLayout><PurchaseBills /></DashboardLayout> } />
            <Route path={routes.REPORTS_VIEW} element={ <DashboardLayout><ResportsView /></DashboardLayout> } />
    
      </Routes>
  )
}

export default App
