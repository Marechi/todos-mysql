import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { todosController } from './todos.controller';
import { Category } from 'src/category.entity';
import { TodoService } from './todos.service';

@Module({
    imports: [TypeOrmModule.forFeature([Todo, Category])],
    controllers: [todosController],
    providers: [TodoService],
})
export class TodosModule {}