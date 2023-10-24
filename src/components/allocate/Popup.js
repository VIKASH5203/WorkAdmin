import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './allocate.css';
import { toHaveFocus } from '@testing-library/jest-dom/matchers';
import ProjectInfo from './ProjectInfo';
import EmployeeInfo from './EmployeeInfo';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs'
import Typography from '@mui/material/Typography';


const ErrorText = (error) => {

  return (
    <Typography variant="body2" sx={{ color: "red"}}>
      {error}
    </Typography>
  )
}

const Popup = (props) => {

  const [open, setOpen] = useState(true);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [project, setProject] = useState({});
  const [error, setError] = useState(null);
  
  const [allocations, setAllocations] = useState(
    [
      {
        startDate: "",
        endDate: ""
      }
    ]
    );
  const [employee, setEmployee] = useState({})

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {

    var validDates = true;

    console.log(fromDate)

    if(fromDate === ""){
      setError("From Date field required.")
    }
    else if(toDate === ""){
      setError("To Date field required.")
    }
    else if(toDate < fromDate){
      setError("From Date cannot be ahead of To Date.")
    }
    else{
      allocations.map((allocation)=>{
        console.log(allocation.startDate)
          if((fromDate >= dayjs(allocation.startDate, "DD/MM/YYYY") && fromDate <= dayjs( allocation.endDate, "DD/MM/YYYY")) || (toDate >= dayjs(allocation.startDate, "DD/MM/YYYY") && toDate <= dayjs( allocation.endDate, "DD/MM/YYYY"))){
            validDates = false;
            console.log("False") 
          }
      })

      if(validDates){
        setError(null)
        //setOpen(false);
      }
      else{
        setError("New allocation must not coincide with existing allocations.")
      }
    }
    
  };


  useEffect(()=>{

    //get employee via api
    //get project via api
    //allocations via api

    setProject(
      {
        name: "Migrating to Cloud",
        projectLead: "Mr. X",
        startDate: "24/10/2022",
        endDate: "24/10/2025",
        status: "active",
        technologyUsed: "react",
        jiraLink: "https://jiraboard1.com",
        resources: 23
      }
    )

    setEmployee(
      {
        id: 123345,
        name: "Verrapan Venugopal",
        expertise: "react",
        location: "Ind-Pune",
        rating: 4
      }
    )

    setAllocations(
      [
        {
          startDate: "10/10/2023",
          endDate: "25/10/2023"
        },
        {
          startDate: "01/11/2023",
          endDate: "10/11/2023"
        }
      ]
    )
  }, [])

  return (

    <LocalizationProvider dateAdapter={AdapterDayjs}>

      <div>
        <Dialog open={open} onClose={handleClose} >
          <DialogTitle>Allocate Employee</DialogTitle>

          <ProjectInfo project = {project}/>
          <EmployeeInfo employee = {employee} rows = {allocations}/>
          <DialogContent>
            <DatePicker 
              className='datepicker' 
              label="From date" 
              onChange={(date) => setFromDate(date)}
              format="DD/MM/YYYY"
              slotProps={{  
              textField: {
                required: true,
              },
            }}
            /> 
            &nbsp;&nbsp;
            <DatePicker 
              className='datepicker' 
              label="To date"
              onChange={(date) => setToDate(date)}
              format="DD/MM/YYYY"
              slotProps={{
                textField: {
                  required: true,
                },
              }}
            />

            {error && ErrorText(error)}

          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit} >Submit</Button>
          </DialogActions>
        </Dialog>
      </div>

    </LocalizationProvider>
  )
}

export default Popup
