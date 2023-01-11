import { Document } from 'mongoose';

export default interface IStore extends Document {
  Owner: string;
  Items: string[];
  Orders: string[];
}
