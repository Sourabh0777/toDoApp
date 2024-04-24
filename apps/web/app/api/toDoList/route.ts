import Todo from '../../../model/ToDoList';
import dbConnect from '../../_mongoDb/db';
import { NextApiRequest, NextApiResponse } from 'next';
// Handler for CRUD operations on todos
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect(); // Connect to MongoDB

    switch (req.method) {
      case 'GET':
        return handleGetRequest(req, res);
      case 'POST':
        return handlePostRequest(req, res);
      case 'PUT':
        return handlePutRequest(req, res);
      case 'DELETE':
        return handleDeleteRequest(req, res);
      default:
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

// Handler for GET request to fetch all todos
async function handleGetRequest(req: NextApiRequest, res: NextApiResponse) {
  try {
    const todos = await Todo.find();
    return res.status(200).json({ todos });
  } catch (error) {
    console.error('Error fetching todos:', error);
    return res.status(500).json({ message: 'Error fetching todos' });
  }
}

// Handler for POST request to create a new todo
async function handlePostRequest(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { description, completed } = req.body;
    const newTodo = new Todo({ description, completed });
    await newTodo.save();
    return res.status(201).json({ message: 'Todo created successfully', todo: newTodo });
  } catch (error) {
    console.error('Error creating todo:', error);
    return res.status(500).json({ message: 'Error creating todo' });
  }
}

// Handler for PUT request to update a todo
async function handlePutRequest(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    const { description, completed } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(id, { description, completed }, { new: true });
    if (!updatedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    return res.status(200).json({ message: 'Todo updated successfully', todo: updatedTodo });
  } catch (error) {
    console.error('Error updating todo:', error);
    return res.status(500).json({ message: 'Error updating todo' });
  }
}

// Handler for DELETE request to delete a todo
async function handleDeleteRequest(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    return res.status(200).json({ message: 'Todo deleted successfully', todo: deletedTodo });
  } catch (error) {
    console.error('Error deleting todo:', error);
    return res.status(500).json({ message: 'Error deleting todo' });
  }
}
