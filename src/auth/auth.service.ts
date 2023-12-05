import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async generateJwt(user: any) {
    const payload = { sub: user.id, username: user.username };

    return {
      accesstoken: this.jwtService.sign(payload),
    };
  }
}
