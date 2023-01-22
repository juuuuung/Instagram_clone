import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class appRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findUser(userId: string): Promise<User[]> {
    return this.prismaService.user.findMany({
      where: {
        userId,
      },
    });
  }

  async SignUp(accountData: Prisma.UserCreateInput): Promise<User> {
    console.log(accountData);
    return this.prismaService.user.create({
      data: { ...accountData },
    });
  }
}
