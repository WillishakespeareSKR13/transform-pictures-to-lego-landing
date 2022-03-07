import mongoose, { Schema, Document } from 'mongoose';

export interface IStoreType extends Document {
  name: string;
}

const StoreTypeSchema: Schema = new Schema(
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

StoreTypeSchema.set('toJSON', {
  virtuals: true
});

export default mongoose.models.StoreType ||
  mongoose.model<IStoreType>('StoreType', StoreTypeSchema);
