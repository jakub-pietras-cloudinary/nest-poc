import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

export interface Todo {
  id: string;
  isDone: boolean;
  title: string;
}

@Injectable()
export class TodoService {
  private todos: Array<Todo> = [];

  createTodo(todoTitle: string) {
    const newTodo: Todo = { id: uuidv4(), isDone: false, title: todoTitle };

    this.todos.push(newTodo);

    return newTodo;
  }

  deleteTodo(todoId: string) {
    const todo = this.todos.find((todo) => todo.id === todoId);

    if (!todo) {
      throw new NotFoundException();
    }

    this.todos = this.todos.filter((todo) => todo.id !== todoId);
  }

  getTodo(todoId: string) {
    const todo = this.todos.find((todo) => todo.id === todoId);

    if (!todo) {
      throw new NotFoundException();
    }

    return todo;
  }

  getTodos() {
    return this.todos;
  }

  updateTodo(todoId: string, updateData: { isDone: boolean; title: string }) {
    const todo = this.todos.find((todo) => todo.id === todoId);

    if (!todo) {
      throw new NotFoundException();
    }

    Object.assign(todo, updateData);

    return todo;
  }
}
