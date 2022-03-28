import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface IBoardSelected extends Document {
  board: ObjectId;
  size: ObjectId;
  pdf: string;
}

const BoardSelectedSchema: Schema = new Schema(
  {
    board: {
      type: Schema.Types.ObjectId,
      ref: 'Board',
      required: true
    },
    size: {
      type: Schema.Types.ObjectId,
      ref: 'BoardSize',
      required: true
    },
    pdf: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true
  }
);

BoardSelectedSchema.set('toJSON', {
  virtuals: true
});

export default mongoose.models.BoardSelected ||
  mongoose.model<IBoardSelected>('BoardSelected', BoardSelectedSchema);
