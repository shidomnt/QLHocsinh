import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { ListStudent } from "./Components/ListStudents";
import { Attendance } from "./Components/Attendance";
import { Setting } from "./Components/Setting";
import { Sidebar } from "./Components/Sidebar";
import { Box, Grid, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Box component={Grid} item lg={12}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Sidebar />}>
                <Route path="attendance" element={<Attendance />}></Route>
                <Route path="teacher" element={<ListStudent />}></Route>
                <Route path="setting" element={<Setting />}></Route>
                <Route path="home" element={<Home />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
