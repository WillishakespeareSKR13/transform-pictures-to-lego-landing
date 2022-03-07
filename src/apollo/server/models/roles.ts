import mongoose, { Schema, Document } from 'mongoose';

export interface IRole extends Document {
  name: string;
}

const RoleSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true
    }
  },
  {
    timestamps: true
  }
);

RoleSchema.set('toJSON', {
  virtuals: true
});

export default mongoose.models.Role ||
  mongoose.model<IRole>('Role', RoleSchema);
