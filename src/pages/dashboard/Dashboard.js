import React from 'react'
import ProjectDetails from '../../components/projectdetails/ProjectDetails'
import Employee from '../../components/employee/Employee'

const Dashboard = () => {
    return (
        <div className='employeeTable'>
        <div>
            <Employee/>
        </div>
        <div>
            <ProjectDetails/>
        </div>
        </div>
    )
}

export default Dashboard
