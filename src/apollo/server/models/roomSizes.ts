import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface IRoomSizes extends Document {
  key: ObjectId;
  sizes: [
    {
      key: ObjectId;
      width: number;
      height: number;
      max: number;
    }
  ];
}

const RoomSizesSchema: Schema = new Schema({
  key: {
    type: Schema.Types.ObjectId,
    ref: 'BoardType'
  },
  sizes: [
    {
      key: {
        type: Schema.Types.ObjectId,
        ref: 'BoardSizeType'
      },
      width: {
        type: Number
      },
      height: {
        type: Number
      },
      max: {
        type: Number
      }
    }
  ]
});

RoomSizesSchema.set('toJSON', {
  virtuals: true
});

export default mongoose.models.RoomSizes ||
  mongoose.model<IRoomSizes>('RoomSizes', RoomSizesSchema);
