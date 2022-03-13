import mongoose, { Schema, Document } from 'mongoose';

export interface IBoardSizeType extends Document {
  name: string;
}

const BoardSizeTypeSchema: Schema = new Schema(
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

BoardSizeTypeSchema.set('toJSON', {
  virtuals: true
});

export default mongoose.models.BoardSizeType ||
  mongoose.model<IBoardSizeType>('BoardSizeType', BoardSizeTypeSchema);
