import { Module } from '@nestjs/common';
import { appRepository } from 'src/app.repository';
import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/prisma.service';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService, PrismaService, appRepository],
  exports: [UsersService],
})
export class UsersModule {}
