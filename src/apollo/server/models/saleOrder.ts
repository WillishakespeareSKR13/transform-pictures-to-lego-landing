import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface ISaleOrder extends Document {
  stripeId: string;
  secret: string;
  product: ObjectId;
  board: ObjectId;
  customer: ObjectId;
  quantity: number;
  total: number;
  currency: string;
  status: string;
}

const SaleOrderSchema: Schema = new Schema(
  {
    stripeId: { type: String, required: true },
    secret: { type: String, required: true },
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    board: { type: Schema.Types.ObjectId, ref: 'Board' },
    customer: { type: Schema.Types.ObjectId, ref: 'User' },
    quantity: {
      type: Number,
      required: true,
      trim: true
    },
    total: {
      type: Number,
      required: true,
      trim: true
    },
    currency: {
      type: String,
      default: 'USD'
    },
    status: {
      type: String,
      default: 'PENDING',
      trim: true
    }
  },
  {
    timestamps: true
  }
);

SaleOrderSchema.set('toJSON', {
  virtuals: true
});

export default mongoose.models.SaleOrder ||
  mongoose.model<ISaleOrder>('SaleOrder', SaleOrderSchema);
