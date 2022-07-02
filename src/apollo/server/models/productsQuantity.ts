import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface IProductsQuantity extends Document {
  saleOrder: ObjectId;
  products: {
    id: ObjectId;
    quantity: number;
  }[];
}

const ProductsQuantitySchema: Schema = new Schema(
  {
    saleOrder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SaleOrder',
      required: true
    },
    products: [
      {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true
        },
        quantity: {
          type: Number,
          required: true
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

export default mongoose.models.ProductQuantity ||
  mongoose.model<IProductsQuantity>('ProductQuantity', ProductsQuantitySchema);
