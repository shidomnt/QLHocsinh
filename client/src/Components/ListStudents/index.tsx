import {
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
  Paper,
} from "@mui/material";
import React from "react";
import { fakeData, DataStudent } from "../../Others/fakeData";

export const ListStudent = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>

            <TableCell>Họ và tên</TableCell>
            <TableCell align="center">Giới tính</TableCell>
            <TableCell>Ngày sinh</TableCell>

            <TableCell align="center">Email </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fakeData.map((value: DataStudent, key: number) => {
            return (
              <TableRow key={key}>
                <TableCell align="center">{key}</TableCell>
                <TableCell>{value.hoten}</TableCell>
                <TableCell align="center">{value.gioitinh}</TableCell>
                <TableCell>{value?.ngaysinh}</TableCell>
                <TableCell align="center">{value.email}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
