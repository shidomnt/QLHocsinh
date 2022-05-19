import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { ListStudent } from "./Components/ListStudents";
import { Attendance } from "./Components/Attendance";
import { Setting } from "./Components/Setting";
import { Sidebar } from "./Components/Sidebar";
import { Box, Grid } from "@mui/material";
import { AppProvider } from "./Context/AppProvider";
import { ThemeProvider } from "./Context/ThemeProvider";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <AppProvider>
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            autoHideDuration={2000}
          >
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
          </SnackbarProvider>
        </AppProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
