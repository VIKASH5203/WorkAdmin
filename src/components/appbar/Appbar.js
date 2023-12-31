import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import "./Appbar.css"


export default function DenseAppBar() {
  return (
    <Box className="appbar">
      <AppBar >
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
