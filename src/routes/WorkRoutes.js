import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/dashboard/Dashboard'
import Popup from "../components/allocate/Popup"

const WorkRoutes = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Dashboard/>}/>
                    <Route exact path="/project-details" element={<Dashboard/>}/>
                    <Route exact path="allocate" element={<Popup/>}/>
                    
                </Routes>
            </BrowserRouter>

        </React.StrictMode>
    )
}

export default WorkRoutes
