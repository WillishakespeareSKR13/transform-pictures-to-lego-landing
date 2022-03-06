import mongoose, { Schema, Document } from 'mongoose';

export interface IRole extends Document {
  name: string;
}

const RoleSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

RoleSchema.set('toJSON', {
  virtuals: true
});

export default mongoose.models.role ||
  mongoose.model<IRole>('role', RoleSchema);
