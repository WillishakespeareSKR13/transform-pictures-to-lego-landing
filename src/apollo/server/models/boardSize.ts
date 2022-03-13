import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface IBoardSize extends Document {
  aspect: number;
  title: string;
  board: ObjectId;
  type: ObjectId;
  x: number;
  y: number;
  isPortrait: boolean;
  size: {
    width: string;
    height: string;
  };
}

const BoardSizeSchema: Schema = new Schema(
  {
    aspect: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    board: {
      type: Schema.Types.ObjectId,
      ref: 'Board'
    },
    type: {
      type: Schema.Types.ObjectId,
      ref: 'BoardSizeType',
      required: true
    },
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
    },
    isPortrait: {
      type: Boolean,
      required: true
    },
    size: {
      width: {
        type: String,
        required: true
      },
      height: {
        type: String,
        required: true
      }
    }
  },
  {
    timestamps: true
  }
);

BoardSizeSchema.set('toJSON', {
  virtuals: true
});

export default mongoose.models.BoardSize ||
  mongoose.model<IBoardSize>('BoardSize', BoardSizeSchema);
