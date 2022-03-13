import mongoose, { Schema, Document } from 'mongoose';

export interface IBoardType extends Document {
  name: string;
}

const BoardTypeSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

BoardTypeSchema.set('toJSON', {
  virtuals: true
});

export default mongoose.models.BoardType ||
  mongoose.model<IBoardType>('BoardType', BoardTypeSchema);
