import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface IProducts extends Document {
  name: string;
  price: number;
  description: string;
  sku: string;
  stock: number;
  image: string;
  store: ObjectId;
}

const ProductsSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    sku: {
      type: String,
      required: true,
      unique: true
    },
    stock: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      default: 'https://via.placeholder.com/150'
    },
    store: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Store',
      required: true
    }
  },
  {
    timestamps: true
  }
);

ProductsSchema.set('toJSON', {
  virtuals: true
});

export default mongoose.models.Products ||
  mongoose.model<IProducts>('Products', ProductsSchema);
