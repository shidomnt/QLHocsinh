import React, { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { SidebarDataT, SidebarDataTeacher } from "../../Others/DataRender";

export const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  //   const handleListItemClick = (
  //     event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  //     index: number
  //   ) => {
  //     setSelectedIndex(index);
  //     console.log(event);
  //   };
  return (
    <Grid container spacing={3} max-height={"100%"}>
      <Box
        component={Grid}
        item
        lg={3}
        xs={0}
        md={0}
        display={{ xs: "none", md: "none", lg: "block" }}
        sx={{
          width: "90%",
        }}
      >
        <List
          sx={{
            position: "fixed",
            width: "inherit",
            maxWidth: "inherit",
          }}
        >
          {SidebarDataTeacher.map((value: SidebarDataT, key: number) => {
            return (
              <ListItemButton
                selected={key === selectedIndex}
                onClick={() => setSelectedIndex(key)}
                key={key}
                component={Link}
                to={value.link}
                sx={{
                  width: "inherit",
                }}
              >
                <ListItemIcon color="primary">{value.icon}</ListItemIcon>
                <ListItemText>{value.title}</ListItemText>
              </ListItemButton>
            );
          })}
        </List>
      </Box>
      <Box
        component={Grid}
        lg={0}
        item
        display={{ lg: "none", xs: "block", md: "block" }}
      >
        <Paper
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 999,
          }}
          elevation={0}
        >
          <BottomNavigation
            value={selectedIndex}
            showLabels
            onChange={(event, newValue) => {
              setSelectedIndex(newValue);
            }}
          >
            {SidebarDataTeacher.map((value: SidebarDataT, key: number) => {
              return (
                <BottomNavigationAction
                  key={key}
                  label={value.title}
                  icon={value.icon}
                  component={Link}
                  to={value.link}
                ></BottomNavigationAction>
              );
            })}
          </BottomNavigation>
        </Paper>
      </Box>
      <Grid item lg={9} xs={12} md={12}>
        <Outlet />
      </Grid>
    </Grid>
  );
};
