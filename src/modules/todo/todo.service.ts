import { Injectable } from '@nestjs/common';
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
    const todoIndex = this.todos.findIndex((todo) => todo.id === todoId);

    return this.todos.splice(todoIndex, 1)[0];
  }

  getTodo(todoId: string) {
    return this.todos.find((todo) => todo.id === todoId);
  }

  getTodos() {
    return this.todos;
  }

  updateTodo(todoId: string, updateData: { isDone: boolean; title: string }) {
    const targetTodo = this.todos.find((todo) => todo.id === todoId);

    Object.assign(targetTodo, updateData);

    return targetTodo;
  }
}
