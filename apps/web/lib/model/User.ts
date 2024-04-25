import { Schema, Document, model, Model, models, SchemaDefinition } from 'mongoose';

// Define the interface for the user document
interface UserDocument extends Document {
  email: string;
  userName: string;
  image?: string; // Optional field
}

// Define the schema for the user model
const userSchemaDefinition: SchemaDefinition<UserDocument> = {
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true, // Set unique as boolean
  },
  image: String,
};

const userSchema = new Schema<UserDocument>(userSchemaDefinition);

// Define the model for the user schema
const UserModel: Model<UserDocument> = models.User || model<UserDocument>('User', userSchema);

export default UserModel;
