export interface DataStudent {
  _id: string;
  id: number;
  gioitinh: string;
  ngaysinh: string;
  diachi: string;
  idGV: string;
  email: string;
  hoten: string;
}

export const fakeData: DataStudent[] = JSON.parse(
  `
    [
        {
          "_id": "626f32b87b9cf987686e32d8",
          "id": "20200003",
          "hoten": "Nguyễn Khánh An",
          "gioitinh": "Nam",
          "ngaysinh": "2002-07-02T17:00:00.000Z",
          "diachi": "Nghệ An",
          "idGv": "UDPM1",
          "email": "hatranquang02@gmail.com"
        },
        {
          "_id": "626f32b87b9cf987686e32d9",
          "id": "20200008",
          "hoten": "Trần Viết An",
          "gioitinh": "Nam",
          "diachi": "Thanh Hóa",
          "idGv": "UDPM1",
          "email": "hieutedam2k2@gmail.com"
        },
        {
          "_id": "626f32b87b9cf987686e32da",
          "id": "20175622",
          "hoten": "Nguyễn Thị Vân Anh",
          "gioitinh": "Nữ",
          "ngaysinh": "1999-09-09T17:00:00.000Z",
          "diachi": "Hà Nội",
          "idGv": "UDPM1",
          "email": "20175622@gmail.com"
        },
        {
          "_id": "626f32b87b9cf987686e32db",
          "id": "20204809",
          "hoten": "Nguyễn Tuấn Anh",
          "gioitinh": "Nam",
          "diachi": "Hà Nội",
          "idGv": "UDPM1",
          "email": "20204809@gmail.com"
        },
        {
          "_id": "626f32b87b9cf987686e32d9",
          "id": "20200008",
          "hoten": "Trần Viết An",
          "gioitinh": "Nam",
          "diachi": "Thanh Hóa",
          "idGv": "UDPM1",
          "email": "hieutedam2k2@gmail.com"
        },
        {
          "_id": "626f32b87b9cf987686e32da",
          "id": "20175622",
          "hoten": "Nguyễn Thị Vân Anh",
          "gioitinh": "Nữ",
          "ngaysinh": "1999-09-09T17:00:00.000Z",
          "diachi": "Hà Nội",
          "idGv": "UDPM1",
          "email": "20175622@gmail.com"
        },
        {
          "_id": "626f32b87b9cf987686e32db",
          "id": "20204809",
          "hoten": "Nguyễn Tuấn Anh",
          "gioitinh": "Nam",
          "diachi": "Hà Nội",
          "idGv": "UDPM1",
          "email": "20204809@gmail.com"
        },
        {
          "_id": "626f32b87b9cf987686e32d9",
          "id": "20200008",
          "hoten": "Trần Viết An",
          "gioitinh": "Nam",
          "diachi": "Thanh Hóa",
          "idGv": "UDPM1",
          "email": "hieutedam2k2@gmail.com"
        },
        {
          "_id": "626f32b87b9cf987686e32da",
          "id": "20175622",
          "hoten": "Nguyễn Thị Vân Anh",
          "gioitinh": "Nữ",
          "ngaysinh": "1999-09-09T17:00:00.000Z",
          "diachi": "Hà Nội",
          "idGv": "UDPM1",
          "email": "20175622@gmail.com"
        },
        {
          "_id": "626f32b87b9cf987686e32db",
          "id": "20204809",
          "hoten": "Nguyễn Tuấn Anh",
          "gioitinh": "Nam",
          "diachi": "Hà Nội",
          "idGv": "UDPM1",
          "email": "20204809@gmail.com"
        },
        {
          "_id": "626f32b87b9cf987686e32d9",
          "id": "20200008",
          "hoten": "Trần Viết An",
          "gioitinh": "Nam",
          "diachi": "Thanh Hóa",
          "idGv": "UDPM1",
          "email": "hieutedam2k2@gmail.com"
        },
        {
          "_id": "626f32b87b9cf987686e32da",
          "id": "20175622",
          "hoten": "Nguyễn Thị Vân Anh",
          "gioitinh": "Nữ",
          "ngaysinh": "1999-09-09T17:00:00.000Z",
          "diachi": "Hà Nội",
          "idGv": "UDPM1",
          "email": "20175622@gmail.com"
        },
        {
          "_id": "626f32b87b9cf987686e32db",
          "id": "20204809",
          "hoten": "Nguyễn Tuấn Anh",
          "gioitinh": "Nam",
          "diachi": "Hà Nội",
          "idGv": "UDPM1",
          "email": "20204809@gmail.com"
        }
      ]
    `
);
