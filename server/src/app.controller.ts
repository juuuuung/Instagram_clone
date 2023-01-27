import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AccountDto } from './auth/DTO/Account.dto';
import { JwtAuthGuard } from './auth/guard/jwt-auth.guard';
import { LocalAuthGuard } from './auth/guard/local-auth.guard';

@Controller('auth')
export class AppController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('signup')
  @UseGuards(JwtAuthGuard)
  async SignUp(@Body() accountData: AccountDto) {
    return this.authService.SignUp(accountData);
  }
}
