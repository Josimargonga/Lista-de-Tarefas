import { Module } from '@nestjs/common';
import { TaskController } from './infra/task.controller';
import { TaskService } from './infra/task.service';

@Module({
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {}
