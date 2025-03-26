import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OutputTaskDto } from '../domain/dtos/output-task-dto';
import { Task } from '../domain/entity/task.entity';
import { InputTAskDto } from '../domain/dtos/input-task-dto';
import { updateTaskDto } from '../domain/dtos/update-task-dto';
import { TaskStatus } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async insert(data: InputTAskDto): Promise<OutputTaskDto> {
    const task = new Task({
      title: data.title,
      description: data.description,
    });

    return this.prisma.task.create({
      data: {
        title: task.title,
        description: task.description,
      },
    });
  }

  async findAll(): Promise<OutputTaskDto[]> {
    const task = await this.prisma.task.findMany({});
    return task;
  }

  async findOne(data: string): Promise<OutputTaskDto | null> {
    const task = await this.prisma.task.findFirst({
      where: { id: data },
    });
    return task;
  }

  async update(id: string, data: updateTaskDto): Promise<OutputTaskDto | null> {
    const existingTask = await this.prisma.task.findUnique({
      where: { id },
    });

    if (!existingTask) {
      throw new Error('Tarefa não encontrada');
    }

    const task = new Task(existingTask);

    task.updateTask(data);

    return this.prisma.task.update({
      where: { id },
      data: {
        title: task.title,
        description: task.description,
      },
    });
  }

  async markDone(id: string): Promise<OutputTaskDto | null> {
    const existingTask = await this.prisma.task.findUnique({
      where: { id },
    });

    if (!existingTask) {
      throw new Error('Tarefa não encontrada');
    }

    return this.prisma.task.update({
      where: { id },
      data: {
        status: TaskStatus.DONE,
      },
    });
  }
}
