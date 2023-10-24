import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import dayjs from 'dayjs'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const EmployeeInfo = (props) => {

  useEffect(()=>{

    console.log(props)
    
    // setRows([
    //   {
    //     startDate: "10/10/2023",
    //     endDate: "25/10/2023"
    //   },
    //   {
    //     startDate: "01/11/2023",
    //     endDate: "10/11/2023"
    //   }
    // ])

    console.log("dayjs" + dayjs())
    console.log(props.rows)

    console.log(dayjs(props.rows[0].endDate, "DD/MM/YYYY"))
    console.log(dayjs() < dayjs(props.rows[0].endDate,"DD/MM/YYYY"))

  }, [])

  return (
    <div className='popup'>
      
      <Card className='popup'>
      <CardContent>
        
        <Typography sx={{ mb: 1.5 }}>
          <strong>Employee</strong>
        </Typography>
        <Typography variant="body2">
          <span className='floatLeft'>{props.employee.name} - {props.employee.id}</span> 
          <span  className='floatRight'>Expertise: {props.employee.expertise}</span>
          <br />
          <span className='floatLeft'>{props.employee.location}</span>
          <span className='floatRight'>rating: {props.employee.rating}</span>
        </Typography>
      </CardContent>
      </Card>

      <TableContainer component={Paper} className='table'>
      <Table aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Project</TableCell>
            <TableCell align="right">From</TableCell>
            <TableCell align="right">To</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {(dayjs() < dayjs(row.endDate, "DD/MM/YYYY") && dayjs() > dayjs(row.startDate, "DD/MM/YYYY")) ? "Current project" : "Future Project"}
              </TableCell>
              <TableCell align="right">{"Project"}</TableCell>
              <TableCell align="right">{row.startDate}</TableCell>
              <TableCell align="right">{row.endDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default EmployeeInfo
