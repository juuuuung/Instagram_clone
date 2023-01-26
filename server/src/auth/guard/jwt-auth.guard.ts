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
    const token = authorization.replace('Bearer ', '');
    req.user = this.validateToken(token);
    console.log(req.user);
    return true;
  }
  public validateToken(token: string) {
    console.log('hello');
    try {
      const verify = this.jwtService.verify(token, jwtConstants);
      return verify;
    } catch (error) {
      switch (error.message) {
        // 토큰에 대한 오류를 판단합니다.
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
