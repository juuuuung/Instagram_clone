import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { appRepository } from 'src/app.repository';

@Injectable()
export class UsersService {
  constructor(private readonly appRepository: appRepository) {}
  async findUser(userId: string): Promise<User[]> {
    return this.appRepository.findUser(userId);
  }
}
