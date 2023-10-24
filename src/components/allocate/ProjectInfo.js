import { Typography } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const ProjectInfo = (props) => {
  return (

    <div className='popup'>
    <Card className='popup'>
      <CardContent>
        
        <Typography sx={{ mb: 1.5 }}>
          <strong>Project</strong>
        </Typography>
        <Typography variant="body2">
          <span className='floatLeft'> {props.project ? props.project.name : "Project Name"}</span> 
          <span  className='floatRight'>Total Resources: {props.project ? props.project.resources : ""}</span>
        </Typography>
      </CardContent>
      </Card>
    </div>
    // <div className='popup'>
    //   <strong>Project Name: </strong>{props.project ? props.project.name : "Project Name"} <br/>
    //   <strong>Total Resources: </strong>{props.project ? props.project.resources : ""}
    // </div>
  )
}

export default ProjectInfo