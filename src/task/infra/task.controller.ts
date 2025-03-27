import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { InputTAskDto } from '../domain/dtos/input-task-dto';
import { updateTaskDto } from '../domain/dtos/update-task-dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() input: InputTAskDto) {
    return this.taskService.insert(input);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOnde(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() input: Partial<updateTaskDto>) {
    return this.taskService.update(id, input);
  }

  @Patch(':id/done')
  markAsDone(@Param('id') id: string) {
    return this.taskService.markDone(id);
  }

  @Patch(':id/todo')
  markAsTodo(@Param('id') id: string) {
    return this.taskService.markTodo(id);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<void> {
    await this.taskService.delete(id);
  }
}
