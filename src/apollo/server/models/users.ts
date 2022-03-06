import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface IUser extends Document {
  name: string;
  lastname: string;
  nickname: string;
  email: string;
  password: string;
  role: ObjectId;
  photo: string;
  emailVerified: boolean;
  birthdate: Date;
}

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  lastname: {
    type: String,
    required: true,
    trim: true
  },
  nickname: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: 'role',
    default: '6224166036d952dc97a07c20'
  },
  photo: {
    type: String,
    trim: true
  },
  emailVerified: {
    type: Boolean,
    default: false
  },
  birthdate: {
    type: Date
  }
});

UserSchema.set('toJSON', {
  virtuals: true
});

export default mongoose.models.user ||
  mongoose.model<IUser>('user', UserSchema);
