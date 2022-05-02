import { Schema } from 'mongoose';
import ShortUniqueId from 'short-unique-id';

interface Person {
  id: string;
  hoten: string;
  ngaysinh: Date;
  diachi: string;
  sdt: string;
  email: string;
  gioitinh: string,
}

interface QuanLy extends Person {}

interface HocSinh extends Person {
  idGv: string;
}

interface GiaoVien extends Person {}

interface ThongBao {
  id: string;
  tieude: string;
  noidung: string;
  idUser: string;
}

interface User {
  id: string;
  password: string;
  quyen: string;
  active: boolean;
}

interface Timestamp {
  created_at: Date;
  updated_at: Date;
}

const uid = new ShortUniqueId({
  dictionary: 'number',
});

const SchemaPerson = new Schema<Person>({
  id: String,
  hoten: String,
  ngaysinh: Date,
  diachi: String,
  sdt: String,
  email: String,
  gioitinh: String,
});

export { uid, SchemaPerson };

export { default as HocSinhModel } from './HocSinh';
export { default as GiaoVienModel } from './HocSinh';
export { default as QuanLyModel } from './HocSinh';
export { default as ThongBaoModel } from './HocSinh';
export { default as UserModel } from './HocSinh';

export type { GiaoVien, HocSinh, QuanLy, ThongBao, User, Timestamp };
