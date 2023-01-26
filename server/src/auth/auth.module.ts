import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LocalStrtegy } from './strategy/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './strategy/jwt.strategy';
import { appRepository } from 'src/app.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1m' },
    }),
  ],
  providers: [
    AuthService,
    LocalStrtegy,
    JwtStrategy,
    appRepository,
    PrismaService,
  ],
  exports: [AuthService],
})
export class AuthModule {}
