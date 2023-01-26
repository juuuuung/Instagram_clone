import { ExecutionContext, HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { jwtConstants } from '../constants';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private readonly jwtService: JwtService) {
    super();
  }
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const { authorization } = req.headers;
    if (authorization === undefined) {
      throw new HttpException('not good', 401);
    }
    req.user = this.validateToken(authorization.replace('Bearer ', ''));
    return true;
  }
  public validateToken(token: string) {
    try {
      return this.jwtService.verify(token, jwtConstants);
    } catch (error) {
      const errorArray = [
        'EXPIRED_TOKEN',
        'INVALID_TOKEN',
        'TOKEN_IS_ARRAY',
        'NO_USER',
      ];

      switch (true) {
        case errorArray.includes(error.message, 1):
          throw new HttpException('유효하지 않은 토큰 입니다.', 401);
        case errorArray.includes(error.message):
          throw new HttpException('토큰이 만료되었습니다.', 401);
        default:
          throw new HttpException('서버 오류입니다.', 401);
      }
    }
  }
}
