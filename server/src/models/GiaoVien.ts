import mongoose, { Schema } from 'mongoose';
import { GiaoVien, SchemaPerson } from '.';

const SchemaGiaoVien = new Schema<GiaoVien>(
  {
    ...SchemaPerson.obj
  },
  {
    timestamps: true,
  }
);

const GiaoVien = mongoose.model('giaovien', SchemaGiaoVien);

export default GiaoVien;
