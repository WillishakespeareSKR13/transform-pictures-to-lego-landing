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
  disabled: boolean;
  birthdate: Date;
  store: [ObjectId];
}

const UserSchema: Schema = new Schema(
  {
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
      ref: 'Role'
    },
    photo: {
      type: String,
      trim: true,
      default:
        'https://farmersca.com/wp-content/webp-express/webp-images/uploads/2016/07/default-profile-300x300.png.webp'
    },
    emailVerified: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    birthdate: {
      type: Date
    },
    store: {
      type: [Schema.Types.ObjectId],
      ref: 'Store'
    }
  },
  {
    timestamps: true
  }
);

UserSchema.set('toJSON', {
  virtuals: true
});

export default mongoose.models.User ||
  mongoose.model<IUser>('User', UserSchema);
