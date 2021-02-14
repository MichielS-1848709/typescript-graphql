import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import User from '../users/models/user';

export type JWTPayload = {
  email: string,
  sub: string,
};

@Injectable()
class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  public validate(email: string, password: string): User | null {
    const user = this.userService.getUserByEmail(email);

    if (!user) {
      return null;
    }

    const passwordIsValid = password === user.password;

    return passwordIsValid ? user : null;
  }

  public login(user: User): { accessToken: string } {
    const payload: JWTPayload = {
      email: user.email,
      sub: user.userId,
    };

    return { accessToken: this.jwtService.sign(payload) };
  }

  public verify(accessToken: string): User {
    const secret = 'eee';
    const payload: JWTPayload = this.jwtService.verify(accessToken, {
      secret: secret,
    });

    const user = this.userService.getUserByEmail(payload.email);

    if (!user) {
      throw new Error('Unable to get the user from decoded token');
    }

    return user;
  }
}

export default AuthService;
