import mongoose, { Schema, Document, Model } from 'mongoose';
interface TodoTaskDocument extends Document {
  description: string;
  status: boolean;
}

const todotaskModel = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  userEmail: {
    type: String,
    required: true,
  },
});
export const todoTask: Model<TodoTaskDocument> = mongoose.models.todoTask || mongoose.model<TodoTaskDocument>('todoTask', todotaskModel);
