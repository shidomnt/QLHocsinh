import mongoose, { Schema } from 'mongoose';
import { QuanLy, SchemaPerson } from '.';

const SchemaQuanLy = new Schema<QuanLy>(
  {
        ...SchemaPerson.obj,
  },
  {
    timestamps: true,
  }
);

const QuanLy = mongoose.model('quanly', SchemaQuanLy);

export default QuanLy;
