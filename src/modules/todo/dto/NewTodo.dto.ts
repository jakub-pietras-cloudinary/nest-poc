import { MinLength } from 'class-validator';

export class NewTodoDTO {
  @MinLength(1)
  title: string;
}
