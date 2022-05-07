import React, { useContext } from "react";
import {
  List,
  Button,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
  Grid,
  ListSubheader,
  Typography,
} from "@mui/material";
import { DataStudent, fakeData } from "../../Others/fakeData";
import { AppContext } from "../../Context/AppProvider";

export const Attendance = () => {
  const state = useContext(AppContext);
  const [checked, setChecked] = React.useState<number[]>([]);
  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = checked.indexOf(parseInt(event.target.value));
    if (index === -1) {
      setChecked([...checked, parseInt(event.target.value)]);
    } else {
      setChecked(
        checked.filter((item: number) => item !== parseInt(event.target.value))
      );
    }
  };

  return (
    <>
      <ListSubheader>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography>Danh sach lop</Typography>
          </Grid>
          <Grid item>
            {checked.length ? (
              <Button variant="contained" color="primary">
                Submit
              </Button>
            ) : (
              <Button variant="contained" color="primary" disabled>
                Submit
              </Button>
            )}
          </Grid>
        </Grid>
      </ListSubheader>
      <List sx={{ mb: 7 }}>
        {state ? state.map((value, key) => {
          return (
            <ListItemButton key={key}>
              <ListItemText>{value.hoten}</ListItemText>
              <ListItemIcon>
                <Checkbox
                  checked={checked.includes(parseInt(value.id.toString()))}
                  value={value.id}
                  onChange={handleToggle}
                  edge="end"
                ></Checkbox>
              </ListItemIcon>
            </ListItemButton>
          );
        }) : <div>Loading...</div>}
      </List>
    </>
  );
};
