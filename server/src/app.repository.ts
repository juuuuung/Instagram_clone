import { Injectable } from '@nestjs/common';
import { Prisma, user } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class appRepository {
  private responseMSG = {
    success: { msg: 'success' },
    failed: { msg: 'Failed' },
  };
  constructor(private readonly prismaService: PrismaService) {}

  async findUser(userId: string, nickName: string = null): Promise<user[]> {
    return this.prismaService.user.findMany({
      where: {
        OR: [{ userId }, { nickName }],
      },
    });
  }

  async SignUp(accountData: Prisma.userCreateInput): Promise<any> {
    const user = await this.findUser(accountData.userId, accountData.nickName);
    if (user.length > 0) {
      return this.responseMSG.failed;
    }
    await this.prismaService.user.create({
      data: { ...accountData },
    });
    return this.responseMSG.success;
  }
}
