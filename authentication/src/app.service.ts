import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getEnv(): object {
    return {
      NODE_ENV: process.env.NODE_ENV,
      JWT_TOKEN_EXP: process.env.JWT_TOKEN_EXP,
    };
  }
}
