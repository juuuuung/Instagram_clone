import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport/dist';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrtegy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'userId', passwordField: 'userPw' });
  }

  async validate(userId: string, userPw: string): Promise<any> {
    const user = await this.authService.validateUser(userId, userPw);
    if (!user) throw new UnauthorizedException('No User In My DB');
    return user;
  }
}
