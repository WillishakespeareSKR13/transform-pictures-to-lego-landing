import mongoose, { Schema, Document } from 'mongoose';

export interface ITermCondition extends Document {
  terms: string;
  conditions: string;
}

const TermConditionSchema: Schema = new Schema(
  {
    terms: {
      type: String,
      required: true,
      trim: true
    },
    conditions: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

TermConditionSchema.set('toJSON', {
  virtuals: true
});

export default mongoose.models.TermCondition ||
  mongoose.model<ITermCondition>('TermCondition', TermConditionSchema);
