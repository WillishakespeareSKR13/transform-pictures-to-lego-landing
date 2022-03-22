import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface IColorSaleOrder extends Document {
  colors: [
    {
      color: ObjectId;
      quantity: number;
    }
  ];
  total: number;
  store: ObjectId;
}

const ColorSaleOrderSchema: Schema = new Schema(
  {
    colors: [
      {
        color: { type: Schema.Types.ObjectId, ref: 'Color' },
        quantity: {
          type: Number,
          required: true,
          trim: true
        }
      }
    ],
    total: {
      type: Number,
      required: true,
      trim: true
    },
    store: { type: Schema.Types.ObjectId, ref: 'Store' }
  },
  {
    timestamps: true
  }
);

ColorSaleOrderSchema.set('toJSON', {
  virtuals: true
});

export default mongoose.models.ColorSaleOrder ||
  mongoose.model<IColorSaleOrder>('ColorSaleOrder', ColorSaleOrderSchema);
