import { NextApiRequest } from 'next';
import { todoTask } from '../../../lib/model/todoTask';
import dbConnect from '../../_mongoDb/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: any): Promise<NextResponse> {
  try {
    const url = new URL(req.url);
    const searchParam = new URLSearchParams(url.searchParams);
    const userEmail = searchParam.get('email');
    await dbConnect();
    const todos = await todoTask.find({ userEmail:userEmail });
    return NextResponse.json({ todos });
  } catch (error) {
    console.error('Error fetching todos:', error);
    return NextResponse.json(new Error('Error fetching todos'));
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    await dbConnect();
    const { description, userEmail } = await req.json();
    const todo = new todoTask({ description: description, userEmail: userEmail });
    await todo.save();
    return NextResponse.json({ message: 'Todo created successfully', todo });
  } catch (error) {
    console.error('Error creating todo:', error);
    return NextResponse.json(new Error('Error creating todo'));
  }
}

export async function PUT(req: NextRequest): Promise<NextResponse> {
  try {
    await dbConnect();
    const { description, id } = await req.json();
    const updatedTodo = await todoTask.findByIdAndUpdate(id, { description }, { new: true });
    if (!updatedTodo) {
      return NextResponse.json(new Error('Todo not found'));
    }
    return NextResponse.json({ message: 'Todo updated successfully', todo: updatedTodo });
  } catch (error) {
    console.error('Error updating todo:', error);
    return NextResponse.json(new Error('Error updating todo'));
  }
}

export async function DELETE(req: NextRequest): Promise<NextResponse> {
  try {
    await dbConnect();
    const { id } = await req.json();
    const deletedTodo = await todoTask.findByIdAndDelete(id);
    if (!deletedTodo) {
      return NextResponse.json(new Error('Todo not found'));
    }
    return NextResponse.json({ message: 'Todo deleted successfully', todo: deletedTodo });
  } catch (error) {
    console.error('Error deleting todo:', error);
    return NextResponse.json(new Error('Error deleting todo'));
  }
}
