import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { TaskModule } from './task/task.module';

@Module({
  imports: [PrismaModule, TaskModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
