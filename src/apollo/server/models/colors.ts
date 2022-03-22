import mongoose, { Schema, Document } from 'mongoose';

export interface IColors extends Document {
  color: string;
  name: string;
  icon: string;
}

const ColorsSchema: Schema = new Schema(
  {
    color: {
      type: String,
      required: true,
      trim: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    icon: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

ColorsSchema.set('toJSON', {
  virtuals: true
});

export default mongoose.models.Color ||
  mongoose.model<IColors>('Color', ColorsSchema);
