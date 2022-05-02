import mongoose, { Schema } from 'mongoose';
import { User } from '.';

const SchemaUser = new Schema<User>(
  {
    id: String,
    password: String,
    quyen: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('user', SchemaUser);

export default User;
