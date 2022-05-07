import React from "react";
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
export const Attendance = () => {
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
        {fakeData.map((value: DataStudent, key: number) => {
          return (
            <ListItemButton key={key}>
              <ListItemText>{value.hoten}</ListItemText>
              <ListItemIcon>
                <Checkbox
                  checked={checked.includes(parseInt(value.id.toString()))}
                  value={value.id}
                  onChange={handleToggle}
                  edge="end"
                  inputProps={{ "aria-label": "controlled" }}
                ></Checkbox>
              </ListItemIcon>
            </ListItemButton>
          );
        })}
      </List>
    </>
  );
};
