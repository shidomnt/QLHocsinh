import ShortUniqueId from 'short-unique-id'

interface Person {
  id: string,
  hoten: string,
  namsinh: Date,
  diachi: string,
  sdt: string,
  email: string,
};

interface QuanLy extends Person {
  
};

interface HocSinh extends Person {
  idGv: string
};

interface GiaoVien extends Person {

};

interface ThongBao {
  id: string,
  tieude: string,
  noidung: string,
  idUser: string,
};

interface User {
  id: string,
  password: string,
  quyen: string,
  active: boolean,
};

interface Timestamp {
  created_at: Date,
  updated_at: Date,
};

const uid = new ShortUniqueId({
  dictionary: 'number'
});

export {
  uid
}

export type {
  GiaoVien,
  HocSinh,
  QuanLy,
  ThongBao,
  User,
  Timestamp
}
