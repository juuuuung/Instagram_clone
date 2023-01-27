import {
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AccountDto } from './auth/DTO/Account.dto';
import { JwtAuthGuard } from './auth/guard/jwt-auth.guard';
import { LocalAuthGuard } from './auth/guard/local-auth.guard';
import { RolesGuard } from './auth/guard/role-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    console.log(req.user);
    return this.authService.login(req.user);
  }

  // @SetMetadata('roles', ['user'])
  @UseGuards(RolesGuard(['user']))
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    return req.user;
  }

  @Post('signup')
  async SignUp(@Body() accountData: AccountDto) {
    return this.authService.SignUp(accountData);
  }
}
