import mongoose, { Schema, Document } from 'mongoose';

export interface TodoModel extends Document {
  description: string;
  completed: boolean;
}

const TodoSchema: Schema = new Schema({
  description: { type: String },
  completed: { type: Boolean, default: false },
});

const Todo = mongoose.model<TodoModel>('Todo', TodoSchema);

export default Todo;
