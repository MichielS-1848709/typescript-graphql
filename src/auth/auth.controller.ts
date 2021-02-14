import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import AuthService from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Request } from 'express';
import User from '../users/models/user';

@Controller('auth')
class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  public login(@Req() req: Request): { accessToken: string } {
    return this.authService.login(req.user as User);
  }
}

export default AuthController;
