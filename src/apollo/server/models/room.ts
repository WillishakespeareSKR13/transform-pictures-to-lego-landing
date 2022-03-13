import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface IRoom extends Document {
  key: string;
  title: string;
  image: string;
  offset: [
    {
      key: ObjectId;
      top: number;
    }
  ];
}

const RoomSchema: Schema = new Schema(
  {
    key: {
      type: String,
      required: true
    },
    title: {
      type: String
    },
    image: {
      type: String
    },
    offset: [
      {
        key: {
          type: Schema.Types.ObjectId,
          ref: 'BoardType'
        },
        top: {
          type: Number
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

RoomSchema.set('toJSON', {
  virtuals: true
});

export default mongoose.models.Room ||
  mongoose.model<IRoom>('Room', RoomSchema);
