import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { appRepository } from 'src/app.repository';
import { jwtConstants } from './constants';
import { AccountDto } from './DTO/Account.dto';
import { PayloadStructure } from './logic/payload';

@Injectable()
export class AuthService {
  constructor(
    private readonly appRepository: appRepository,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(userId: string, pass: string): Promise<any> {
    const user = await this.appRepository.findUser(userId);

    if (user[0] && user[0].userPw === pass) {
      const { userPw, ...result } = user[0];
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = new PayloadStructure(user).makePayloadObject;
    // console.log(user.userId + '로그인 성공');

    return {
      access_token: this.jwtService.sign(payload, jwtConstants),
    };
  }

  async SignUp(accountData: AccountDto) {
    return this.appRepository.createUser(accountData);
  }
}
