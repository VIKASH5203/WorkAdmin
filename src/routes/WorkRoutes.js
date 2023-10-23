import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from '../Dashboard'

const WorkRoutes = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Dashboard/>}/>
                    <Route exact path="/project-details" element={<Dashboard/>}/>

                    
                </Routes>
            </BrowserRouter>

        </React.StrictMode>
    )
}

export default WorkRoutes
