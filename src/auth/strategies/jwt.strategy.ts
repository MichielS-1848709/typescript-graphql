import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../../users/users.service';
import { JWTPayload } from '../auth.service';
import User from '../../users/models/user';

@Injectable()
class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'eee',
    });
  }

  validate(validationPayload: JWTPayload): User | null {
    return this.usersService.getUserByEmail(validationPayload.email);
  }
}
export default JwtStrategy;
