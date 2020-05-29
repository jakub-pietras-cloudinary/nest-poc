import { Module } from '@nestjs/common';

import { HelloModule } from './modules/hello/hello.module';
import { TodoModule } from './modules/todo/todo.module';

@Module({
  imports: [HelloModule, TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
