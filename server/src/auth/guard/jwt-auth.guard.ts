import { ExecutionContext, HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { jwtConstants } from '../strategy/constants';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private readonly jwtService: JwtService) {
    super();
  }
  canActivate(context: ExecutionContext) {
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
      switch (error.message) {
        case 'INVALID_TOKEN':
        case 'TOKEN_IS_ARRAY':
        case 'NO_USER':
          throw new HttpException('유효하지 않은 토큰 입니다.', 401);
        case 'EXPIRED_TOKEN':
          throw new HttpException('토큰이 만료되었습니다.', 401);
        default:
          throw new HttpException('서버 오류입니다.', 401);
      }
    }
  }
}
