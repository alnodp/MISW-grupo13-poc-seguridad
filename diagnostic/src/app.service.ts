import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getEnv(): object {
    return {
      NODE_ENV: process.env.NODE_ENV || 'dev',
      AUTH_ENDPOINT: process.env.AUTH_ENDPOINT || 'http://localhost:3000',
    };
  }
}
