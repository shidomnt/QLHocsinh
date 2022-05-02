import mongoose, { Schema } from 'mongoose';
import { ThongBao } from '.';

const SchemaThongBao = new Schema<ThongBao>(
  {
    id: String,
    tieude: String,
    noidung: String,
    idUser: String,
  },
  {
    timestamps: true,
  }
);

const ThongBao = mongoose.model('thongbao', SchemaThongBao);

export default ThongBao;
