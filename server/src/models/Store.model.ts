import mongoose, { Schema } from 'mongoose';
import IStore from '../interfaces/store.interface';

const StoreSchema: Schema = new Schema(
  {
    owner: { type: String, require: true, ref: 'User' },
    items: { type: Array, require: true },
    orders: { type: Array, require: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model<IStore>('Store', StoreSchema);
