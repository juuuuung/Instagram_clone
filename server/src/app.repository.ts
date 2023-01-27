import { Injectable } from '@nestjs/common';
import { user } from '@prisma/client';
import { AccountDto } from './auth/DTO/Account.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class appRepository {
  private _responseMSG = {
    success: { msg: 'success' },
    failed: { msg: 'Failed' },
  };
  constructor(private readonly prismaService: PrismaService) {}

  async findUser(userId: string, nickName?: string): Promise<user[]> {
    return this.prismaService.user.findMany({
      where: {
        OR: [{ userId }, { nickName }],
      },
    });
  }

  async createUser(accountData: AccountDto): Promise<any> {
    const user = await this.findUser(accountData.userId, accountData.nickName);
    if (user[0]) {
      return this._responseMSG.failed;
    }
    await this.prismaService.user.create({
      data: { ...accountData, role: 'user' },
    });
    return this._responseMSG.success;
  }
}
