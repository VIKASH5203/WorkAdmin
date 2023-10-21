import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

export default function Appbar() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
          <Typography
            variant="subtitle1"
            noWrap
            component="div"
            sx={{ flexGrow: 1, padding: "10px"}}
          >
            WorkAdmin
          </Typography>
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}
