import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class appRepository {
  private responseMSG = {
    success: { msg: 'success' },
    failed: { msg: 'Faild' },
  };
  constructor(private readonly prismaService: PrismaService) {}

  async findUser(userId: string): Promise<User[]> {
    return this.prismaService.user.findMany({
      where: {
        // OR: [{ userId }, { nickName }],
        userId,
      },
    });
  }

  async SignUp(accountData: Prisma.UserCreateInput): Promise<User> {
    // if (await this.findUser(accountData.userId, accountData.nickName)) {
    //   return this.responseMSG.failed;
    // }
    return this.prismaService.user.create({
      data: { ...accountData },
    });
    // return this.responseMSG.success;
  }
}
