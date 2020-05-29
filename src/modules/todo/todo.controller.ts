import { Body, Controller, Delete, Get, Inject, Param, Patch, Post } from '@nestjs/common';

import { NewTodoDTO } from './dto/NewTodo.dto';
import { TodoService } from './todo.service';

@Controller('/todos')
export class TodoController {
  @Inject(TodoService)
  private readonly todoService: TodoService;

  @Post('/')
  createTodo(@Body() newTodo: NewTodoDTO) {
    return this.todoService.createTodo(newTodo.title);
  }

  @Delete('/:id')
  deleteTodo(@Param('id') todoId: string) {
    return this.todoService.deleteTodo(todoId);
  }

  @Get('/:id')
  getTodo(@Param('id') todoId: string) {
    return this.todoService.getTodo(todoId);
  }

  @Get('/')
  getTodos() {
    return this.todoService.getTodos();
  }

  @Patch('/:id')
  updateTodo(@Param('id') todoId: string, @Body() updateData: { isDone: boolean; title: string }) {
    return this.todoService.updateTodo(todoId, updateData);
  }
}
