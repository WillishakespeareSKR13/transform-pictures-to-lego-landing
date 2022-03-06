import mongoose, { Schema, Document } from 'mongoose';

export interface ISaleOrder extends Document {
  stripeId: string;
  secret: string;
  product: string;
  size: string;
  quantity: number;
  price: number;
  status: string;
}

const SaleOrderSchema: Schema = new Schema({
  stripeId: { type: String, required: true },
  secret: { type: String, required: true },
  product: {
    type: String,
    required: true,
    trim: true
  },
  size: {
    type: String,
    required: true,
    trim: true
  },
  quantity: {
    type: Number,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  status: {
    type: String,
    default: 'PENDING',
    trim: true
  }
});

SaleOrderSchema.set('toJSON', {
  virtuals: true
});

export default mongoose.models.SaleOrder ||
  mongoose.model<ISaleOrder>('SaleOrder', SaleOrderSchema);
