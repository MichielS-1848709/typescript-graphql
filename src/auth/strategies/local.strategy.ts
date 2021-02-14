import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import AuthService from '../auth.service';
import User from '../../users/models/user';

@Injectable()
class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authServices: AuthService) {
    super({ usernameField: 'email' });
  }

  public validate(email: string, password: string): User {
    const user = this.authServices.validate(email, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}

export default LocalStrategy;
