import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(userId: string, pass: string): Promise<any> {
    const user = await this.usersService.findUser(userId);

    if (user.length !== 0 && user[0].userPw === pass) {
      const { userPw, ...result } = user[0];
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { userName: user.nickName, userId: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
