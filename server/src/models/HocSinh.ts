import mongoose, { Schema } from 'mongoose';
import { HocSinh } from '.';

const SchemaHocSinh = new Schema<HocSinh>({
  id: String,
  hoten: String,
  namsinh: Date,
  diachi: String,
  sdt: String,
  email: String,
  idGv: String,
});

const HocSinh = mongoose.model('hocsinh', SchemaHocSinh);

export default HocSinh;
