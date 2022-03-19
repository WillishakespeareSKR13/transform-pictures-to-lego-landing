import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface IBoard extends Document {
  type: ObjectId;
  title: string;
  currency: string;
  description: string;
  image: string;
}

const BoardSchema: Schema = new Schema(
  {
    type: {
      type: Schema.Types.ObjectId,
      ref: 'BoardType',
      required: true
    },
    currency: {
      type: String,
      default: 'USD'
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

BoardSchema.set('toJSON', {
  virtuals: true
});

export default mongoose.models.Board ||
  mongoose.model<IBoard>('Board', BoardSchema);
