import mongoose, { Schema } from 'mongoose';
import { HocSinh, SchemaPerson } from '.';

const SchemaHocSinh = new Schema<HocSinh>(
  {
    ...SchemaPerson.obj,
    idGv: String,
  },
  {
    timestamps: true,
  }
);

const HocSinh = mongoose.model('hocsinh', SchemaHocSinh);

export default HocSinh;
